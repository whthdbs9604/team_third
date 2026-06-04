components 안에는 푸터, 헤더 등 여러 페이지에 공통으로 사용하는 부품들을 모아놓았습니다.

서브페이지는 components > SubPage.js에 하위 개념입니다.
SubPage.js안 에 HeaderSub.js 와 Footer.js, Navigation.js 가 포함되어있어서 서브페이지 제작하실때 굳이 연결하실 필요는 없습니다.

sub 파일 내에 서브페이지 파일들을 모아놓았습니다. 서브페이지 제작 시 참고해주세요.

App.js에서 element={<SubPage />}로 되어있는 Route 그룹 안에 서브페이지를 넣어 연결해주세요.
Route 안에 element에서 title을 적어주셔야 서브헤더에 타이틀이 입력됩니다.

주의점//
업로드 할 때 파일 내에 사용하지않는 import를 삭제 해주세요. 버셀 업로드가 완료되지 않습니다.
img 태그에 alt를 추가하지 않을 시 에러가 뜹니다. alt를 꼭 달아주세요.
