//JSX 문법으로 컴포넌트를 작성한다. import~문장은 리액트가 JSX 문법을 이해할 수 있게하는 문장
import React from 'react';

//컴포넌트를 작성하는 문법인 JSX는 JS + html 이기 때문에 함수 작성하듯이 작성하면됨.
function Green() {
    return (
        <h1>I love color green.</h1>
    );
}

//다 만든 컴포넌트를 내보내줘야 다른 파일에서 이 컴포넌트를 사용할 수 있다. 
export default Green;