var posts=["2024/03/09/Deno-Deploy的妙用/","2023/11/26/Hexo-Fluid添加一言及出处/","2024/02/02/Hexo-ParticleX及Diaspora主题使用Artitalk/","2024/01/21/Hexo-ParticleX添加Valine评论/","2024/04/06/Ubuntu配置Android-SDK并使用Cordova/","2023/08/30/hello-world/","2023/10/14/为Hexo-Fluid的文章设置网格背景/","2024/02/08/使用Cloudflare-Pages搭建图床/","2024/01/21/使用Github-Actions自动切换网站主题/","2024/03/22/如何使用Toga制作奇怪的安卓App/","2023/11/26/姐姐♡喜欢/","2023/11/05/少女的人设/","2023/10/26/想穿Lolita/","2023/10/05/我想变成女生/","2023/12/15/生日快乐/","2023/10/14/谁能帮我找个女朋友/","2023/10/05/魔改Hexo-Fluid/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };