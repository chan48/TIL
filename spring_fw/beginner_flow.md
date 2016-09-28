# Spring FW 가볍게 접근

## Spring FW 동작 흐름
- 배경 : 사용자가 브라우저를 통해 특정 URL을 입력했을 때, Spring FW이 어떻게 동작하는 지 간단하게 흐름을 알아본다.
1. WEB-INF 폴더 밑의 web.xml에 접근한다. (WAS 서버의 설정 정보에 접근)
2. web.xml에 정의되어 있는 url-pattern에 따라 매핑되어 있는 서블릿을 실행하고, 서블릿을 실행하기 전에 기타 속성들에 대해서 처리를 한다.
ex) 예를 들면,
``` xml
<servlet>
    <servlet-name>dispatcher</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>/WEB-INF/beans.xml</param-value>
    </init-param>
</servlet>
<sevlet-mapping>
    <servlet-name>dispatcher</servlet-name>
    <url-pattern>/login</url-pattern>
    <url-pattern>/board</url-pattern>
</sevlet-mapping>
```
이 경우, ../login 이라는 url 요청이 들어오면 dispatcher 서블릿이 실행이 되고, `init-param`의 잡혀 있는 beans.xml의 설정들을 다 로딩한다.

ex) beans.xml 내용
```xml
<context:component-scan base-package="com.poscoict.license" use-defulat-filters="false">
    <context:include-filter type="annotation" expression="org.springframework.stereotype.Controller">
    <context:include-filter type="annotation" expression="org.springframework.web.bind.annotation.ControllerAdvice">
</context:component-scan>
```
base-package가 `com.poscoict.license` 이고, Controller라는 어노테이션이 구현되어 있는 java 클래스들을 모두 접근한다. (`org.springframework.stereotype` 의 패키지 명 경우, 스프링 프레임워크에서 제공하는 내장 라이브러리)

이렇게 객체를 생성해서 Spring Container에서 갖고 있으면, 사용자가 필요할 때 스프링 컨테이너가 사용자에게 넘겨준다. 이렇게 스프링 컨테이너가 객체의 생성과 소멸을 관리해주는 IOC (제어의 역전) 이 성립이 된다.

3. 특정 URL의 값이 매핑이 되어 있는 Controller에서 인증을 비롯한 기타 로직을 처리하고 (중간에 Service 로직이 구현되어 있는 경우 Service를 탈 수 있다), return 값으로 URL값을 넘겨주느냐 / 그냥 dispatcher로 넘겨주느냐 두가지 방식이 있는데 (requestDispatcher vs SendRedirect 방식) 이 것에 관한 것은 별도로 정리하여 게시하겠다.

- Controller 어노테이션의 예
```java
@Controller
public class BoardController extends ExceptionControllerAdvice {
    ...
}
```

- login 이라는 url을 타는 경우 return 값이 url이다. 이것은 SendRedirect 방식
```java
    @RequestMapping( value = {"login"}, method = {RequestMethod.POST, RequestMethod.GET})
    public String checkLogin(HttpSession session){
        CustomUserDetails userDetails = (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserPermission userPermission = getBoardService().getMenuList(userDetails.getUserNo());
        session.setAttribute("userDetails", userDetails);
        session.setAttribute("USER_NO", userDetails.getUserNo());
        session.setAttribute("USER_NAME", userDetails.getUsername());
        session.setAttribute("userPermission", userPermission);
        if(userDetails.changePassword() && !userDetails.getAuthorities().toString().contains(Consts.rolePrefix+Consts.USERLV_GUEST))
            session.setAttribute("changePassword", true);

        session.setAttribute("jstree", "initialize");
        session.setAttribute("userMenu", getBoardService().getUserMenu(userPermission, userDetails));

        return "redirect:/board";
    }
```

- board 라는 url의 경우 return 값이 url을 포함하지 않고 dispatcher Servlet을 타도록 하였다. 이 경우는 forward() 방식이며, 현재 mv에 저장되어 있는 subCategory, boardList 같은 Object들은 다음 뷰 페이지에서도 계속 유지된다 (Scope에 대해서 이해가 필요한 경우이다)
```java
    @RequestMapping( value = { "board" }, method = { RequestMethod.GET, RequestMethod.POST } )
    public ModelAndView getNoticeList( @RequestParam( value = "folder", defaultValue = "notice" ) String folder,
            @RequestParam( value = "chartNum", defaultValue = "1" ) String chartNum,
            @RequestParam( value = "search", required = false ) String search,
            @RequestParam( value = "select", required = false ) String select,
            @RequestParam( value = "subCategory", defaultValue = "NOTICE" ) String subCategory){
        ModelAndView mv = new ModelAndView();
        // mainPage.jsp 를 의미 dispacther 서블릿 쪽에 정의 되어 있음 (prefix, suffix)
      mv.setViewName( "mainPage" );
        Map<String, Object> map = getBoardService().getBoardList(folder, chartNum, search, select, subCategory);

        if ( ( search != null ) || ( search != "" ) ) {
            mv.addObject( "search", search );
            mv.addObject( "select", select );
        }

        mv.addObject( "subCategory", subCategory );
        mv.addObject( "boardList", map.get("list") );
        mv.addObject("subCategoryList", map.get("subCategoryList"));
        mv.addObject( "folder", folder );
        mv.addObject( "totalPage", map.get("totalPage") );
        mv.addObject( "chartNum", chartNum );

      // send redirect : forward 방법 구분,
      // 이건 forward 방식
        return mv;
    }
```

* 위의 과정을 간단하게 도표로 표현한 이미지를 첨부한다.
![Spring FW Flow]()
