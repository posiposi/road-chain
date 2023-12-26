const sendByLine = () => {
  const sendNo = document.getElementById('line-test-text')?.innerText;
  const sendText = '紹介コードを登録してクーポンをゲットしよう！';
  const sendUrl = 'https://www.google.com';
  const testText = 'みかたん';
  const encodeText = encodeURIComponent(
    [sendText, sendUrl, sendNo, testText].join('\n')
  );

  console.log(encodeText);
  const sendButton = document.getElementById(
    'line_send_text_icon'
  ) as HTMLAnchorElement;
  sendButton.href = 'https://line.me/R/share?text=' + encodeText;
};

export default sendByLine;
