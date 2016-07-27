# 훌륭한 프론트엔드 개발자가 되는 법

> ### ※ 이글은 훌륭한 프론트엔드 개발자가 되는 법에 대해서 Google Engineer PHILIP의 개인적인 의견을 기록한 글 중 주요부분을 발췌하여 번역한 것입니다.

## [이 글의 목적]
In this article I’m going to talk about the mindset of a front-end engineer, and hopefully give a more lasting answer to the question: how do you become great? <br>
**어떻게 최고가 되는지 그리고 프론트엔드 개발자로서의 가져야할 마음가짐에 대해서 이 글을 적습니다.**

## [단순히 문제를 풀지말고, 어떤것이 일어나고 있는지를 보라]
I get that there are times when you need something that works, and you need it now. But if you never take the time to understand the root of your problem, you’ll find yourself in the same situation over and over again. <br>
**진짜 문제의 근원이 무엇인지 생각을 햅지 않는다면 그 상황을 계속해서 반복적으로 직면하게 될 것이다.**

Taking the time to figure out why your hack works may seem costly now, but I promise it’ll save you time in the future. Having a fuller understanding of the systems you’re working within will mean less guess-and-check work going forward. <br>
**시간을 내어 왜 당신의 일이 많은 비용을 소모하는 지 생각해보세요, 이게 미래에 당신에게 더 많은 시간을 절약하게 해줄 것입니다. 시스템에 대한 완벽한 이해는 앞으로 갈수록 더 적은 점검과 예측을 하도록 도와줄 것 입니다.**

## [브라우저가 미래에 변하는 것을 예측하는 법을 배우라]
One of the main differences between front and back-end code is back-end code generally runs in an environment that’s under your control. The front end, by contrast, is completely outside of your control. The platform or device your users have could completely change at any moment, and your code needs to be able to handle that gracefully. <br>
**백엔드와 프론트 엔지니어의 차이점은 바로 프론트엔드 영역이 엔지니어가 제어할 수 없는 범위를 포함하고 있다는 것입니다. 웹서비스를 사용하는 사용자의 플랫폼과 디바이스에 따라서, 완전히 다른 환경이 펼쳐질 수 가 있는 것이죠. 따라서, 당신의 코드가 이러한 환경을 자연스럽게 제어할 수 있어야 합니다.**

I remember reading through the source code of a popular JavaScript framework back in 2011 and seeing the following line (changed for simplicity):

`var isIE6 = !isIE7 && !isIE8 && !isIE9;` <br>
In this case IE6 was the catchall for IE versions, presumably to handle versions of IE older than 6. But at soon as IE10 came out, large portions of our application completely broke. <br>
**여기 이 코드를 보면, 전혀 IE10을 고려하지 않은 코드여서 IE10가 나오자마자 바로 엄청난 양의 어플리케이션들이 다 망가지게 되었습니다.**

## [스펙을 읽어라]
In addition, so-called “great” front-end engineers are often the people on the forefront of change, adopting new technologies before they’re mainstream and even contributing to the development of those technologies <br>
**소위 말하는 훌륭한 프론트엔드 개발자들은 변화에 앞장서서 새로 등장한 기술들이 주요 기술이 되기전에 발견하여, 그 기술의 발달에 기여하는 사람들입니다.**

## [다른사람의 소스를 보아라]
Reading other people’s code, for fun, is probably not your idea of a fun Saturday night, but it’s without a doubt one of the best ways to become a better developer. <br>
**토요일 저녁에 다른사람의 코드를 재미로 읽는 것은 정말 재밌지 않은 일일지 모르지만, 그렇게 주말을 보냄으로써, 당신은 보다 나은 프론트엔드 개발자가 될 수 있습니다.**

## [당신보다 똑똑한 사람들과 일을 하라]
The problem with being both self-taught and also working for yourself is you generally don’t get the benefit of learning from people smarter than you. You don’t have anyone to bounce ideas off of or review your code.<br>
**혼자 배우고 일하는 것은 당신보다 똑똑한 사람들과 일을 했을 때의 이점을 전혀 얻지 못할 것입니다. 왜냐면, 당신의 코드를 리뷰해주고, 아이디어를 굴려줄 사람이 없기 때문이죠.**

If you do end up working for yourself at some point in your career, make a point of becoming (or staying) involved in open source. Actively contributing to open-source projects gives you many of the same benefits of working on a team, sometimes even more. <br>
**그래서 혹시나 당신의 커리에어서 혼자 일할 시기가 온다면, 오픈소스에 기여해보세요. 팀으로 일하는 것보다 훨씬 많은 혜택을 가져다 줄 것입니다.**

## [바퀴를 재창조하라]
Reinventing the wheel is bad for business, but it’s great for learning. You may be tempted to grab that typeahead widget or event delegation library from npm, but imagine how much more you’d learn by trying to build those things yourself. <br>
**기존의 것을 재창조하는게 사업의 관점에서는 나쁠지 모르겠으나, 배우기에는 매우 좋은 기회입니다. 3rd Party Library 같은 것을 혼자 만들어보면 정말 많은 것을 배울 수 있거든요.**

But in this article I’m talking about how to go from good to great. Most of the people I consider great in this industry are the creators or maintainers of very popular libraries that I use all the time. <br>
**제가 생각하는 이 분야의 최고인 사람들은 자주 사용되는 유명한 라이브러리의 제작자이거나 유지하는 분들입니다.**

You could probably have a successful career without ever building your own JavaScript library, but you’ll probably also never work close enough to the metal to really get your hands dirty <br>
**당신이 아마 자바스크립트 라이브러리를 제작하지 않고도 훌륭한 커리어를 가질 수 있지만, 절대 훌륭한 프론트엔드 개발자가 되기 위한 필요한 경험들은 해보지 못할 것입니다.**

## [너가 무엇을 배웠는지 적어라]
Last but certainly not least, you should write about what you learn. There are so many good reasons to do this, but perhaps the best reason is it forces you to understand the topic better. If you can’t explain how something works, there’s a decent chance you don’t really understand it yourself. And oftentimes you don’t realize you don’t understand it until you try writing it down. <br>
**마지막으로, 배운 것을 꼭 기록하세요. 수많은 이유가 있겠지만서도, 가장 중요한 이유는 당신이 그 토픽을 이해하는데 많은 도움을 준다는 것이니다. 아마 직접 써보기 전까지는 당신이 그것을 제대로 이해하고 있지 않다는 것을 깨닫지 못할거에요.**

from http://philipwalton.com/about/
