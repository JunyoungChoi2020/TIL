var sanitizeHtml = require('sanitize-html');
var dirty = `스크립트는 과연 
    <script>some really tacky HTML</script> 무시될까?
    h1태그는 <h1>링크</h1> 무시가 될까?`;
var clean = sanitizeHtml(dirty);
console.log(clean);
/*스크립트는 과연
     무시될까?
    h1태그는 링크 무시가 될까?*/