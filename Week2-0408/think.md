# React 프로젝트의 폴더구조는 어떻게 설계하는것이 좋을까???

## Presentation Component - Container Component ↔ Custom hook ↔ Atomic를 비교해보자!

## Presentation Component - Container Component 

React의 가장 기본적인 디자인 패턴으로 UI와 로직을 분리한 형태이다. <br/>
UI와 로직을 하나의 컴포넌트로 모두 담으면 파일이 커지게 되고 유지보수가 어려워진다.<br/>

따라서 아래와 같은 형식으로 분리시킨다.<br/>

```
<LoginContainer> //Presentation Component

<LoginForm /> //Container Component

</LoginContainer>
```

LoginContainer 컴포넌트는 단순히 UI를<br/>
LoginForm 컴포넌트는 유저에게 로그인 정보를 받아 로직을 처리하는 일을 담당하게 된다.<br/>

그러나 요즘은 이러한 패턴을 사용하지 않는다고 하는데<br/>
Component - Hooks패턴으로 작업이 단순해지고 재사용까지 편리해지기 때문이다.<br/>

## Component + Custom hook

앞선 Presentation Component - Container Component 형식에서는 LoginForm 의 로직을 재사용하기가 어렵다. <br/>
즉 다른 컴포넌트에서 LoginForm 이라는 공통의 로직이 발생하면 이를 넘겨줄 수 없다는 말이다.<br/>

그러나 CustomHook으로 LoginForm 의 로직을 따로 관리하면 해당로직이 필요한 컴포넌트로 LoginForm 훅을 불러와 재사용 할 수 있다.<br/>

## Atomic 구조

Atom - Molecule - Organism - Template - Page<br/>
의 단계로 이루어져 있다.<br/>
<br/>
마치 원자단위로 쪼개진 컴포넌트를 합쳐 최종의 page로 만드는 형식을 의미한다.<br/>
<br/>
Atom - Html 태그처럼 정말 작은 컴포넌트를 의미한다.<br/>
Molecule - Atom을 여러개 합쳐만든 컴포넌트이다.<br/>
Oraganisms - Molecule과 Atom들을 조합하여 만든 컴포넌트이다.<br/>
Template - 위에서 만든 컴포넌트들을 넣을 레이아웃 컴포넌트이다.<br/>
Page -  위의 컴포넌트들이 모두 종합된 하나의 최종 페이지를 의미한다.<br/>

Atomic 구조의 경우 디자인시스템이 거의 완벽히 구축된 상태에서 작업하기 매우 효율적이다.<br/>
button input 등등을 미리 만들어둔 후 가져다 쓰기만 하면 되는 방식이다.<br/>

그러나 기획이나 디자인이 자주 변경된다면 Atom을 계속 수정해야하는 문제가 발생함으로 Atomic 구조를 추천하지 않는다.<br/>

# 언제 어떤 방식을 택하는게 좋을까?
Presentation Component - Container Component : component + Custom hook 방식이 좋아보여 <br/>
거의 쓰지는 않지만 초심자에게 커스텀훅까지 설계하기 어려울 때 사용해보면 조금 좋을 듯 하다!

component + Custom hook : 커스텀훅을 통해 재사용이 가능해지기 때문에 리액트에 가장 좋은 방식이라고 생각된다.<br/>

Atomic : 컴포넌트를 작은 단위로 분리하기 때문에 버튼 ,  input 등의 디자인들이 잘 만들어져있고 이런것들을 주로 활용할 때 사용되면 좋은 방법이라고 생각된다. <br/>
그러나 앞서 언급했든 기획이나 디자인이 자주 변동되는 프로젝트라면 Atom컴포넌트를 계속 수정해야하기 때문에 비추된다.<br/>

# 프론트엔드에게 디자인 패턴이란 어떤 존재일까?

프론트엔드에게 디자인 패턴이란 부품을 정리하는 과정이며 이는 재사용과 직결되어 있다고 생각된다.<br/>

팀이 만든 코드 조각들을 잘 정리하고 폴더를 구조화해 놓으면 똑같은 로직이나 비슷한 로직이 필용할때 이중작업을 하지않고 재사용하여 코드량과 더불어 작업량을 줄일 수 있다.<br/>

또한 잘 정리정돈된 폴더 구조는 협업의 효율성을 더욱 높일 수 있다. 따라서 우리는 더 좋은 폴더구조 잘 분리된 로직 등을 고려하고 설계해 가며 코드를 작성해야한다.<br/>

하지만 개인적으로 이러한 디자인패턴을 고려하고 도입하는 것이 초심자나 주니어에게는 어려울 수 있으며 더불어 사람마다 주관적인 기준이 다르기에 좋은 폴더구조를 설계하는 것이 정답이 없을 수도 있다고 생각한다.<br/>

따라서 누군가의 좋은 폴더구조나 이론적인 폴더구조를 가져와서 도입하는 것도 좋지만 스스로 고민해가며 또는 팀에 맞는 폴더구조를 자체적으로 구현해보면서 <br/>
더 좋은 방법은 없는지 효율적인 방법은 없는지 고민해보는 방법도 좋은 공부방법이라고 생각한다. <br/>
그러다보면 오늘날 나온 디자인 패턴들의 기본적인 의미도 자연스레 이해되지 않을까라고 생각된다.<br/>

***
참고자료<br/>
https://doiler.tistory.com/38<br/>
https://yozm.wishket.com/magazine/detail/1531/<br/>