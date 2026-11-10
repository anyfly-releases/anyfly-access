const copyButton = document.getElementById("copy-entry");
const copyStatus = document.getElementById("copy-status");
let resetCopy;
copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("https://anyfly.net");
    copyButton.textContent = "已复制";
    copyStatus.textContent = "已复制最新入口 https://anyfly.net";
  } catch {
    copyButton.textContent = "请手动复制";
    copyStatus.textContent = "未能自动复制，请手动复制地址 https://anyfly.net";
  }
  clearTimeout(resetCopy);
  resetCopy = setTimeout(() => {
    copyButton.textContent = "复制地址";
  }, 3000);
});
