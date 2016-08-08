# Spring Transaction Manager & JDBC Template
## 전역 & 지역 트랜잭션
- 전역 트랜잭션 :
  1. 어플리케이션의 코드 재사용을 제한한다
  2. EJB CMT (`Container Managed Transaction`)의 선언적인 트랜잭션 관리
- 지역 트랜잭션 :
  1. JDBC 연결과 관련된 트랜잭션 리소스에 한정적
  2. 전역에 비해 더 사용하기 쉬우나 중요한 단점을 가지고 있다.
  3. 트랜잭션이 적용된 여러 리소스에 걸쳐서 동작이 X

## 스프링 트랜잭션 매니저
- 전역 & 지역 트랜잭션의 단점들을 해결
- 선언적 & 프로그래밍적 트랜잭션 관리 둘다 제공

## 스프링 JDBC
- JDBC를 개발하기 지루한 API로 만들법한 저수준 레벨의 작업을 모두 맡아서 처리해준다.
  - 커넥션 변수 정의
  - SQL statement 지정
  - 변수와 변수 값 제공
  - 반복 작업 처리
  - 등등

  ![이미지]()

## JDBC Template
- 리소스 생성과 해지시 연결을 닫지 않는 오류를 막아준다.
- JDBC Template 클래스 : SQL 조회, 업데이트, 저장 프로시저 호출, ResultSet 반복수행 등을 수행

## JDBC Best Pracitce
- JdbcTemplate 클래스의 인스턴스는 설정되고 나면 *threadsafe* 하다.
- JdbcTemplate 의 인스턴스를 한개 설정하고 나면, 인스턴스의 공유된 참조를 여러개 DAO에서 사용할 수 있기에 매우 중요하다.
- JdbcTemplate 클래스 사용시 일반적인 관행 : 스프링 설정파일에서 `DataSource`를 설정, 공유된 `DataSource` Bean을 DAO 클래스에 의존성 주입한다.
- JdbcTemplate은 DataSource에 대한 setter로 생성된다.

  ``` java
  public class JdbcCorporateEventDao implements CorporateEventDao {

      private JdbcTemplate jdbcTemplate;

      public void setDataSource(DataSource dataSource) {
          this.jdbcTemplate = new JdbcTemplate(dataSource);
      }

      // JDBC-backed implementations of the methods on the CorporateEventDao follow...
  }
  ```

## DataSourceTransactionManager
- 지정된 `DataSource` 의 JDBC 커넥션을 현재 실행중인 쓰레드에 바인딩한다.
- 각 `DataSource` 마다 한개의 쓰레드 커넥션을 허용한다.
- `DataSourceTransactionManager` 클래스는 `custom isolation level`과 JDBC statement 쿼리 만료시간에 적용되는 적절한 timeout을 지원한다.
- 이를 위해서는 JdbcTemplate을 사용하거나 statement 생성시에 `DataSourceUtils.applyTransactionTimeout` 를 호출해야한다.
