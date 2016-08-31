# Legacy Site to Progressive Web App (Part I)

## Why did I start to work on this project?
- 배경 : 팀내에서 고객과의 질의응답 채널로 포탈 사이트를 운영하고 있다.
- 현상 : 포탈 사이트가 개발된지 약 2년이 된 것 같은데 (소스를 보니 2014년에 만들어진 것으로 추정), 시대를 역행하는 Non Responsive Design 과 고객 Q&A에 Notification 기능이 없어 수시로 사이트 접속하여 게시글과 댓글을 모니터링 해야하는 불편함이 있었다.
- 계획 : Mobile 에서도 간단한 게시글 확인 및 알람 기능을 추가하여 사용성을 늘리기로 결정했고, Progressive Web 의 몇가지 기능들을 넣어보기로 결정했다.

## What is Progressive Web App?
- 구글에서 최근에 밀어붙이는 웹앱으로 *Responsive Design, App Like, Re-engagable, Installable, Safe, ...* 등의 특징과 함께 빠른 로딩과 높은 사용자 경험을 제공하는 것이 특징이다.
- Mobile 에서만 지원되었던 Push 알림, Mobile Icon, 앱 설치 배너 등을 웹 어플리케이션에서 지원하기 때문에, 일반 웹 개발로 Mobile Application 의 Appy 한 느낌을 낼 수 있다.
- 자세한 내용은 [Google Web Fundamental](https://developers.google.com/web/fundamentals/) 참고

## Non Responsive to Responsive Design
- 기존에 적용된 UI Framework 은 반응형이 지원되지 않는 *Bootstrap* 이다. 무슨 이유에서인지 모르겠으나 반응형 지원을 하지 않고, 철저히 PC 기준으로만 사이트를 제작하였다. 아마도, 모바일에서의 화면 Layout 까지 고려하기에는 시간이 빠듯했거나, 요구사항 자체가 Mobile 에서도 볼 수 있게 해달라는 요청이 없었기 때문인 것 같다.
- *Boostrap* 외에도 *jstree, jquery-ui, jquery-remodal, jquery-multifile, NHN Smart Editor* 등의 외부 라이브러리들을 가져다가 화면을 구성해놓았다.

#### 레거시 사이트 UI
> 1365 * 600 해상도 PC 화면

![Login Page in PC](/web_development/images/pc_login.png)
- 그냥 로그인 기능만 되면 문제 없어보이는 UI...

![Main Page in PC](/web_development/images/pc_main.png)
- 전체적으로 균형은 잘 잡혀 있어 보인다.

![List posts in PC](/web_development/images/pc_list.png)
- 왼쪽 트리를 펼쳐 게시판 목록을 펼친다.

![View a page in PC](/web_development/images/pc_viewpost.png)
- 게시판 질의 응답 기능에만 충실한 화면 Layout 과 UI

> iPhone 6 브라우저 화면

![Login Page in Mobile](/web_development/images/.png)
- 로그인 페이지는 그럭저럭 봐줄만 하다.

![Main Page in Mobile](/web_development/images/2.png)
- 모바일에서 보는 페이지는 거의 재앙에 가깝다.

![Move to a page in Mobile](/web_development/images/3.png)
- 페이지를 이동하려면 왼쪽 트리를 클릭해야 하는데, 페이지 확대를 해서 저 작은 리스트를 클릭해야 페이지 이동이 된다... 참 난감하다.

![View a page in Mobile](/web_development/images/4.png)
- 게시글 조회 시 게시글과 답변 모두 확대 하지 않고는 보기가 거의 불가능하다.

## Re-designing UI & UX with Critical User Journeys
- 지난 6월 Google Campus 에서 진행된 UI & UX 워크샵에서 배운 "Critical User Journeys" 기법을 이번 사이트에 적용 해보았다.
  - *Critical User Journeys : 사용자의 입장에서 해당 서비스를 사용할 때 모든 동작에 대해 UI 와 Layout 을 고려하고 이를 기반으로 UI Design 을 가다듬는 것*.


- UI 개선을 위해 가장 첫 번째로 해야할 질문들 (The very first thing to do is ask these questions)
  1. `Who` is using your website? *누가 사이트를 사용하는가?*
  2. `When` are they using their website? *사용자들은 사이트를 언제 사용하는가?*
  3. `Why` are they using the website? *사용자들은 왜 사이트를 사용하는가?*
  4. `Where` are they using the website? *사용자들이 사이트를 어디에서 사용하는가?*


- 사이트를 사용하는 유저 입장에서, 로그인 절차부터 게시판 및 기타 기능들을 사용할 때 까지 위의 질문들을 염두에 두고 다음과 같이 개편하였다.
  1. **Mobile First Design**
  2. 버튼에 **아이콘**을 추가하여 **직관화**
  3. 글쓰기 / 글읽기 / 답글달기 할 때 보여지는 기능들의 **우선순위**를 정하여 **UI 컴포넌트 재배치**
  4. 게시글 정보를 **중요도 순으로 다시 배치**하고 간결하게 표현
  5. 댓글에 자신의 사진을 표시하여 책임감 및 흥미 부여 (화장실에 담당자 사진 걸어놓는 것과 동일한 목적)
  6. **전체적인 Tone & Manner 를 맞추기 위해** 기존 jsTree **라이브러리 제거** 후 Collapsible 과 Collection 으로 트리 구현

#### 개선된 사이트 UI
> 15인치 노트북 PC에 최적화된 화면

![New Login Page in PC](/web_development/images/new_pc_login.png)
- MaterializeCSS 의 기본 Login Template 을 적용했다.

![BoardList in PC](/web_development/images/new_pc_list.png)
- UI 의 전체적인 느낌을 통일하기 위해 왼쪽 jstree 라이브러리를 걷어내고, collipsible & collection 조합으로 왼쪽에 트리를 구현하였다.

![View a page in PC](/web_development/images/new_pc_viewpost.png)
- 글 수정 / 삭제 / 목록 등의 버튼에 아이콘을 이용하여 직관적인 표시를 하였고, 답글과 댓글 영역을 명확히 분리하였다. 댓글 리스트는 우선순위 기준으로 정보를 재배치 및 계정에 프로필 사진을 추가하여, 댓글 구분이 쉽도록 하였다.

![Delete a page in PC](/web_development/images/new_pc_delete.png)
- 기존 화면의 불필요한 영역을 차지하는 ID & PW 를, 게시글을 삭제할 때 확인하도록 변경했다.

> iPhone 6 브라우저 화면

![New Login Page in Mobile](/web_development/images/new_mobile_login.png)
- PC Login 화면에서 크기만 작아진다.

![Main page in Mobile](/web_development/images/new_mobile_main.png)
- 로그인 후 메인화면, 모바일에서는 폴더 트리를 Global Navigation 으로 뺐다.

![List page in Mobile](/web_development/images/new_mobile_list.png)
- 게시글 목록은 다음과 같이 표시된다. 테이블 cell 의 더 세부적인 css 스타일링으로 가독성을 높이는 작업이 더 필요한 것 같다.

![Global Navigation in Mobile](/web_development/images/new_mobile_tree.png)
- Global Navigation Bar 를 이용하여 페이지 간 이동을 한다.

![View a page in Mobile](/web_development/images/new_mobile_viewpost.png)
- Mobile 에서 유용하게 사용할만한 보기 & 댓글 기능에 주안점을 두고, 가독성을 높이는데 주력했다.


## Back-End Service Analysis
#### 기술 및 기법
- 기존의 시스템은 *Spring FW 3.4* 로 구성이 되어 있었고, 다음과 같은 *기술 및 기법* 들을 쓰고 있었다.
  - **Spring Security** : 권한 관리를 위한 스프링 기술스택
  - **Controller Annotation** in *bean.xml* : `base.package` 에 지정된 패키지 안에 해당되는 모든 `@Controller` 에 대해 처리해준다.
  - **ControllerAdvice Annotation** in *bean.xml* : 위와 동일한 성격으로, 여기서는 Controller 에서 발생하는 에러 케이스 들에 대한 Exception 처리를 지정해주었다.
  - **Multipart Resolver** in *beans.xml* : 파일 또는 이미지를 Client 에서 Stream 방식으로 서버로 보낼 때, Stream 형식으로 받아 처리해줄 수 있는 Resolver
  - **JDBC Template** in *applicationContext.xml* : 스프링에서 DB 연결시 사용하는 전형적인 스프링 JDBC 연결방법
  - **DataSource Transcation Manager** in *applicationContext.xml* : 스프링에서 제공하는 다양한 Transaction Manager중의 하나
  - **DBCP DataSource** in *applicationContext.xml* : DB와 어플리케이션을 효율적으로 연결하는 커넥션 풀을 제공. 일정 커넥션을 유지하다가 필요하면 사용하고 반납하여 재사용하는 형태

#### 문제점
- 기존 레거시 시스템의 가장 큰 문제점은 특정 주기 간격으로, **서비스가 올라가 있는 Tomcat 을 주당 2회 정도 계속 재시작을 해줘야 했다.**
- 그 이유를 진단하기 위해 아래 쿼리를 넣었고,

  ``` html
  show status like `%connect%`;
  ```

- 진단 결과는 다음과 같았다.
  > *"페이지 마다 수행되는 쿼리에 대해서 커넥션이 닫히지 않고, 계속 커넥션 수가 누적된다."*

## Back-End Service Refactoring
#### 안티패턴 1
- 위와 같은 문제점을 해결하기 위해 구현된 Spring 로직을 분석한 결과, 다음과 같은 안티패턴을 발견했다.

  ``` java
  @Controller
  public class BoardController extends ExceptionControllerAdvice {

    private BoardService getBoardService() {
      ApplicationContext context = new GenericXmlApplicationContext("applicationContext.xml");
      return context.getBean("boardService", BoardService.class);
    }

    // ...
  }
  ```

- 위의 안티패턴은 해당 컨트롤러가 수행이 될 때 마다, ApplicationConext 를 매번 생성하여 메모리 낭비 및 DB 커넥션 수를 불필요하게 늘리게 된다.
- **해결책** : ApplicationContext는 WAS (Web Application Server) 에 Spring Container가 올라가는 최초에만 생성되고, 이후에는 생성된 Context 를 공유하는 형식으로 바꿨다.

  ``` java
  @Controller
  public class BoardController extends ExceptionControllerAdvice {

    @Autowired
    private BoardService boardService; // Application Context 에서 생성된 BoardService 를 참조한다.

    // ...
  }
  ```

#### 안티패턴 2
- `Controller.java` 에서 해당 URL에 관한 로직을 처리 후 URL redirect 을 다음과 같이 한 안티패턴이 발견되었다.

  ```java
  @RequestMapping(value = "replyBoard", method = RequestMapping.POST)
  public String replyBoard(
    HttpSession session,
    @RequestParam("folder") String folder,
    @RequestParam("subCategory") String subCategory, ... ) throws UserException {
      ModelAndView mv = new ModelAndView;
      mv.addObject("folder",folder);
      mv.addObject("subCategory",subCategory);
      // ...

      return "redirect:/viewPost?folder="+folder+"&subCategory="+subCategory;
    }
  ```

- ModelAndView 를 사용하여 redirect 를 할 경우에는 `ModelAndView` 에 추가된 Object 변수들이 redirect 시에 자동으로 붙지 않는다. 따라서, 이를 아래와 같이 `Model model` 을 이용하면,

  ```java
  @RequestMapping(value = "replyBoard", method = RequestMapping.POST)
  public String replyBoard(
    HttpSession session,
    @RequestParam("folder") String folder,
    @RequestParam("subCategory") String subCategory, Model model ) throws UserException {
      model.addObject("folder",folder);
      model.addObject("subCategory",subCategory);
      // ...

      return "redirect:/viewPost";
    }

    // URL 결과 : `viewPost?folder="folder"&subCategory="subCategory"`
  ```

- 위처럼 Model 을 이용하여 View에 데이터를 넘겨주면, redirect 시에 자동으로 변수가 붙게되는 이점이 있다.




> Progrssive Web Feature 적용은 Part 2 에서 이어집니다...
