loadData();
async function loadData() {
    var data = await fetch('https://api.hyeonjs.com/winter').then((response) => response.json());
    document.getElementById("info").innerHTML = '<tr><td colspan=2 bgcolor=#EEE><b>열차 운행 정보<b></td></tr>' + 
        '<tr><td width=30%>위치</td><td>' + data.status + '</td></tr>' + 
        '<tr><td>정보</td><td>' + (data.terminal.endsWith('선순환') ? data.terminal : data.terminal + '행') + ' ' + data.trainNo + '번 열차</td></tr>' + 
        '<tr><td colspan=2 bgcolor=#EEE><b>랩핑 열차 정보<b></td></tr>' + 
        '<tr><td width=30%>차량번호</td><td>2485</td></tr>' + 
        '<tr><td>운행 기간</td><td>2025년 1월 19일까지</td></tr>' + 
        '<tr><td colspan=2 bgcolor=#EEE><b>사이트 정보<b></td></tr>' + 
        '<tr><td colspan=2 style="text-align: left;">&nbsp;&nbsp;이 사이트는 개인이 개발하여 운영하는 것으로, 철도 운영 기관 및 아이돌 소속사와는 전혀 관련이 없습니다. 이 사이트의 정보는 자동으로 갱신되지 않으며, 네이버에서 제공하는 나눔글꼴을 사용합니다.</td></tr>';
}