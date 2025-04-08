function toggleCSS() {
      var linkElement = document.getElementById("custom-css");
      
      if (!window.current) {
        window.current = window.cuset;
      }

      if (window.current === 'light'){
        linkElement.disabled = false; // 启用CSS文件
      } else if (window.current === 'dark'){
        linkElement.disabled = true; // 禁用CSS文件
      }
      if (window.current === 'dark') {
        window.current = 'light';
      } else if (window.current === 'light') {
        window.current = 'dark';
      }
    }
toggleCSS();