Spring 걸음마를 떼고 있는 Front-End Engineer 로서 Spring Web MVC Framework 의 [공식 문서](https://docs.spring.io/spring/docs/current/spring-framework-reference/html/mvc.html)를 읽고 요약하였습니다.

## Spring Web MVC Framework 소개
- 스프링 MVC 프레임워크는 HTTP 요청을 핸들러에 연결해주는 Dispatcher Servlet 을 기반으로 제작되었다.
- @Controller 와 @RequestMapping 어노태이션으로 Default Handler 를 지정할 수 있다.
- Spring 3.0 이상 버전에서는 @Controller 와 @PathVariable 및 기타 기능으로 RESTful Web 사이트와 어플리케이션을 제작할 수 있다.
- Spring 의 장점은 데이터 바인딩 시 데이터 타입이 일치하지 않을 때 치명적인 시스템 에러로 간주하지 않고, 어플리케이션 단에서 식별이 가능한 validation 에러로 처리하기 때문에 유효성을 검증하기 쉽다는 것이다.
- Spring 의 View 표현방식 또한 유연한데, Controller 에서 받은 요청으로 model data 를 처리하여 view에 넘겨주거나 아니면 Controller 에서 응답 내용을 직접 작성하여 처리할 수 있기 때문이다.
- View 처리에서는 파일확장, Accept header content type, bean 이름, 프로퍼티 파일, 커스텀 ViewResolver 구현등의 설정이 가능하다.
- Model 의 경우 Map 인터페이스 이기 때문에 JSP, Freemarker 와 같은 템플릿 기반 렌더링 기술들과 결합하여 사용할 수 있고 XML, JSON 형식의 컨텐츠를 생성할 수 있다.

## Spring Web MVC 의 특징
- 스프링 웹 모듈은 다음과 같은 특징들을 지원한다.
  - 명확한 역할 분담 : Controller, Validator, Command object, Form object, Model object, DispatcherServlet, Handler mapping, Dispatcher Servlet, Handler Mapping 등 각자 역할만 수행할 수 있도록 특정 오브젝트가 지정되어있다.
  - 커스텀이 가능한 핸들러 매핑과 뷰 표현 : 핸들러 매핑과 뷰 표현은 단순한 URL 기반 구성부터 특정 목적을 가진 복잡한 구성방식까지 모두 가능하다.
  - 단순하지만 강력한 JSP Tag 라이브러리 지원 : Spring Tag 라이브러리는 데이터 바인딩과 테마 등의 기능을 지원한다.
  - HTTPRequest 또는 HTTPSession 스코프를 지원하는 Bean 라이프 사이클 : Spring MVC 자체에 국한된 기능이라기보다, Spring MVC 가 사용하는 WebApplicationContext 의 기능이다.

## Dispatcher Servlet
- Spring Web MVC 프레임워크는 HTTP 요청들을 controller 에 전달해주는 central servlet 의 request-driven 방식으로 이루어져 있다.
- 이러한 Dispatcher Servlet 은 Spring IoC 컨테이너와 밀접하게 통합되어 있어서 Spring 이 제공하는 거의 모든 기능을 사용할 수 있다.

#### Dispatcher Servlet 처리흐름
1. 화면에서 요청 수신
2. 요청을 Front Controller 로 전달
3. 해당 요청을 Controller 로 위임
4. Controller 에서 요청 핸들링
5. Model 데이터를 연산하고 렌더링 응답을 Front Controller 로 다시 위임
6. Front Controller 에서 View Template 으로 렌더링 응답을 전송
7. View Template 의 결과를 다시 Front Controller 로 전달
8. 전달된 결과를 Front Controller 에서 화면으로 최종 전달

#### Java EE 서블릿 표준 구성방법 (Servlet 3.0+ 환경)

``` java
public class MyWebApplicationInitializer implements WebApplicationInitializer {

    @Override
    public void onStartup(ServletContext container) {
        ServletRegistration.Dynamic registration = container.addServlet("exampleServlet", new DispatcherServlet());
        registration.setLoadOnStartup(1);
        registration.addMapping("/example/*");
    }

}
```

- "/example" 로 시작하는 모든 url 요청은 exampleServelt 이라는 이름의 서블릿에 매핑되어 처리된다.
- **WebApplicationInitializer** 는 Spring MVC 가 Servlet 3 컨테이너를 자동으로 초기화 할 수 있게 사용하는 코드 구성 기반 인터페이스다.

## Dispatcher Servlet 과 URL 매핑
- web.xml 파일에 아래와 같은 구성으로 web 의 url 요청을 해당 서블릿에 매핑할 수 있다.

``` xml
<web-app>
    <servlet>
        <servlet-name>example</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <load-on-startup>1</load-on-startup>
    </servlet>

    <servlet-mapping>
        <servlet-name>example</servlet-name>
        <url-pattern>/example/*</url-pattern>
    </servlet-mapping>

</web-app>
```

- 각각의 DispatcherServlet 은 각기 WebApplicationContext 를 갖는다.
- 하위 WebApplicationContext는 루트 WebApplicationContext 에 정의된 모든 빈을 상속받는다.
- Spring MVC 는 Dispatcher Servlet 초기화 시, `WEB-INF` 밑의 `[servlet-name]-servlet.xml` 형식으로 지정된 파일을 찾고, 그 안에 정의된 빈을 생성하고 만약 전역 스코프에 존재하면 오버라이딩 한다.

``` xml
<web-app>
    <servlet>
        <servlet-name>golfing</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <load-on-startup>1</load-on-startup>
    </servlet>
    <servlet-mapping>
        <servlet-name>golfing</servlet-name>
        <url-pattern>/golfing/*</url-pattern>
    </servlet-mapping>
</web-app>
```

- 위의 경우 `/WEB-INF/golfing-servlet.xml` 라는 파일이 존재해야 `/golfing` 이름으로 들어오는 url 요청이 해당 서블릿으로 전달된다.
