# WebGL



## 개요
- WebGL 은 OpenGL ES 2.0 기반으로 만들어졌으며 3D 그래픽을 사용하기 위한 그래픽 라이브러리다.
WebGL 은 HTML5 기반의 Canvas 위에서 돌아가며 자바스크립트로 프로그래밍이 가능하다.

- WebGL 은 Chrome, IE 11+, FireFox, Safari, Opera 와 같이 거의 모든 메이저 브라우저에서 지원한다.

- WebGL 을 이용하는 상위 라이브러리인 Three.js 를 사용하면 더욱 빠르고 간편하게 3D 랜더링이 가능하다.

- WebGL 을 사용하는 Phaser.js 자바스크립트 웹게임 개발 라이브러리가 있다.
    - https://phaser.io/
    - 규모가 크고 관련 레퍼런스도 많은 대표적인 자바스크립트 기반 라이브러리이다.
    - 모바일 최적화도 잘 되어있으며 네이티브 앱으로 빌드도 가능하다.



---



## 셋팅
- Init

    canvas 요소를 불러온 후에 canvas.getContext() 메소드로 셋팅한다.

        let webgl = canvas.getContext("webgl");
    

- 해상도 셋팅

    페이지가 처음 Load 되어 DOM 이 생성 된 이후에 늘리면 랜더링 가능한 픽셀 수가 늘어나지 않고 비율을 무시하며 늘어난다.
    이미 랜더링된 WebGL Context 의 해상도를 변경하려면 webgl.viewport() 메소드를 사용한다.
    CSS 나 자바스크립트로 canvas 크기를 변경 후 canvas 의 width, height 값으로 WebGL Context 의 크기를 변경해야한다.

        canvas.width = 1280;
        canvas.height = 720;
        webgl.viewport(0, 0, canvas.width, canvas.height);



---



## 쉐이더
- Learning...



---



## 레퍼런스
- Mozila MDN 의 WebGL 가이드
    - https://developer.mozilla.org/ko/docs/Web/API/WebGL_API

- WebGL 을 관리하는 비영리 컨소시엄 크로노스 그룹 (= 애플, 구글, 모질라, 오페라)
    - https://www.khronos.org/webgl/

- 적당한 예제들
    - https://web.archive.org/web/20130420162020/http://learningwebgl.com/lessons/

- Three.js 와 함께 시작하기
    - https://www.merixstudio.com/blog/getting-started-WebGL-using-threejs/

- WebGL 을 빠르게 프로토타입핑 하고 실험할 수 있는 온라인 Playground
    - http://webglplayground.net/



---

##### ... 내용 계속 추가