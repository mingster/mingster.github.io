---
layout: post
title: Subversion for Windows 安裝指南
date: 2006-02-15 12:45:00.000000000 +08:00
type: post
published: true
status: publish
categories:
- 產業Know-How
- 軟體新知
- SVN
tags: []
meta:
  blogger_blog: mingster.blogspot.com
  blogger_author: Ming Tsai
  blogger_eb3191f8b77bf2ac10a5fe54aebee9ae_permalink: '7456269312294472106'
author:
  login: mingster
  email: mingster.tsai@gmail.com
  display_name: mingster
  first_name: ''
  last_name: ''
---
<p>PDF download: <a href="http://mingster.com/blog_content/Subversion_for_Windows_Installation.pdf">Subversion for Windows 安装指南</a></p>
<p>this post is an updated version from Huanlin Tsai's revision 1.41 (<a href="http://huanlin.dyndns.org:8080/techshare/articles/2004061303/svn_install.htm">http://huanlin.dyndns.org:8080/techshare/articles/2004061303/svn_install.htm</a>)</p>
<p><strong>摘要： </strong>版本控制在軟體工程的領域中隸屬於軟體建構管理（Configuration Management）的範疇，是軟體開發流程當中相當基本且重要的一環，因此版本控制系統可說是開發人員必備的工具之一。本文將介紹一個開放原始碼的版本控制系統：Subversion，說明相關工具的安裝步驟，並且透過實例操作示範如何在Visual Studio .NET 2003裡面對專案進行版本管理。</p>
<p><a title="基礎閱讀: Subversion 英文介紹" href="http://mingstert.blogspot.com/2005/04/quck-intro-of-accessing-subversion.html">Subversion</a> 是一個自由/開放源碼的版本控制系統，也就是說 Subversion 管理著隨時間改變的檔案，這些檔案放置在一個中央檔案庫(repository) 中，這個檔案庫，很像一個尋常的檔案伺服器，不過它會記住每一次檔案的變動。這樣你就可以把檔案回復到舊的版本，或是瀏覽檔案的變動歷程，許多人會把版本控制系統想像成某種“時光機器”。</p>
<p><strong>本文目的：</strong></p>
<ul>
<li>在 Windows 2003 Server 上安裝及設定 Subversion，以便於團隊成員透過 Internet 協同開發軟體專案，並有版本控管功能。</li>
<li>在用戶端安裝 Subversion 的 Client-side 工具：TortoiseSVN，可以整合與檔案總管整合在一起，利用 GUI 方式提供了建立檔案庫、以及匯入、匯出等功能。</li>
</ul>
<p>本文提供一個簡易的安裝指南，說明在 Windows 環境下安裝 Subversion 伺服器的步驟，以及 TortoiseSVN 用戶端工具的安裝步驟。</p>
<p><strong><span style="font-size:100%;">1. 簡介</span> </strong></p>
<p>Subversion 是一個版本控制系統，它是根據 CVS（Concurrent Versions System）的功能為基礎來設計，但是改進了一些 CVS 的缺點，例如：在CVS中搬移檔案目錄很不方便，Subverion 則連目錄的異動都納入版本管理；此外，它也增加了其他的功能，例如：不可分割的送交（如同資料庫交易的概念，送交多個檔案時，若有任何一個檔案失敗，則這次送交的所有檔案都不會進入檔案庫中）、支援多種網路協定、一致的檔案差異比對（不管什麼檔案類型，均使用二進位差異比對方式）等等。</p>
<p>由於目前手邊查到的 Subversion 文件，主要都是針對 Unix用戶來撰寫，所以這份文件特地針對 Windows環境下安裝 Subversion 的步驟來說明，希望透過這份文件，能夠幫助你很快的把Subversion安裝起來。</p>
<p>在安裝過程中，會需要輸入一些命令列的指令，本文不會詳細解釋某些指令的用途和意義，因此你除了要熟悉 DOS 的基本指令，還應該隨時查閱 Subversion 的<a href="http://svnbook.red-bean.com/" target="_blank">電子書</a>（有<a href="http://freebsd.sinica.edu.tw/%7Eplasma/svnbook/book.html" target="_blank">中文版</a>），以了解 Subverion 命令列工具的使用方法。圖形化介面雖然方便，但是熟悉命令列工具的使用，才能讓你得到完全的自由。</p>
<p>1.1 基本觀念</p>
<p>如果你缺乏版本控制系統的基本觀念，就算能夠順利安裝好 Subversion，可能安裝完成後就不知道下一步怎麼做了。這裡只簡單的提一點必要的基礎觀念，記住你最終還是得閱讀 Subversion 的官方文件。</p>
<p>1.2 作業環境與軟體版本</p>
<p>以下是本文件使用的作業環境與軟體版本 </p>
<ul>
<li>Windows 2003 Server with SP1</li>
<li>Apache HTTP Server v2.0.55 </li>
<li>Subversion v1.2.3</li>
<li>TortoiseSVN 1.2.6 build 4786</li>
</ul>
<p>2. 安裝與建立 Subversion 伺服器
<p>請準備一台穩定的機器，作為 Subversion 的伺服器。</p>
<h2><span style="font-size:85%;">2.1 安裝 Apache HTTP Server</span></h2>
<p>到 <a href="http://httpd.apache.org/">http://httpd.apache.org/</a> 下載 Apache HTTP Server 2.0 版 for Windows 的安裝程式，我下載的檔案是 apache_2.0.50-win32-x86-no_ssl.msi。</p>
<p>下載之後直接安裝，安裝過程很簡單，就不贅述了，但安裝之前請先檢查你的電腦是否有安裝 IIS，由於 Apache 預設使用 80 port，會跟 IIS 的網站衝突，你必須把 IIS 的 Web 站台關閉，再安裝 Apache HTTP Server。</p>
<p>安裝完成以後，開啟瀏覽器，瀏覽網址 <a href="http://localhost/">http://localhost/</a> 看看有沒有出現安裝成功的網頁。</p>
<h2><span style="font-size:85%;">2.2 安裝 Subversion</span></h2>
<p><b>1. </b>到 <a href="http://subversion.tigris.org/">http://subversion.tigris.org/</a>下載最新版的 Subversion，你可以下載 .zip 或者打包好的自動安裝程式，我下載的是檔案svn-1.2.3-setup.exe。</p>
<p><b>2. </b>下載後直接安裝，安裝過程都是下一步，沒什麼特別的。在此Windows安裝版增加了Apache modules的選項，必要的環境變數都幫你設定好了。<br /><img src="/img/image001.jpg" border="0" /></p></p>
<p><span style="font-size:85%;">2.2.1 手動安裝Apache modules</span></p>
<p>以下步驟敘述手動安裝Apache modules的程序（如果你下載的是 .zip 檔，就要自行設定）。
<ol>
<li>把 $SVN_Install/bin/目錄下的 mod_dav_svn.so、 mod_authz_svn.so複製到 $Apache2_Install/modules/目錄下。</li>
<li>把 $SVN_Install/bin/目錄下所有的dll檔複製到 $Apache2_Install/bin/。 </li>
<li>接著用文書編輯器開啟 Apache HTTP Server 的 httpd.conf（在 /conf/ 目錄下），尋找一堆 LoadModule 指令，先找到以下兩行：<br /><span style="font-family:Courier New;">#LoadModule dav_module modules/mod_dav.so #LoadModule<br />dav_fs_module modules/mod_dav_fs.so 把前面dav_svn_module的 '#' 字元刪除，然後把下面幾行文字加到這群 LoadModule<br />指令的後面： LoadModule dav_svn_module modules/mod_dav_svn.so LoadModule authz_svn_module<br />modules/mod_authz_svn.so</span></li>
<p>
<li>重新啟動 Apache HTTP Server。
<div style="border:medium none;background:rgb(255,255,204) none repeat scroll 0 50%;-moz-background-clip:-moz-initial;-moz-background-origin:-moz-initial;width:100%;border-collapse:collapse;">問題排除: 如果 Apache HTTP Server 無法啟動，請依下列步驟檢查：<br />1. 檢查 Subversion 的路徑是否有在系統的%PATH% 環境變數裡面。<br />2. 檢查你加入 httpd.conf 裡的項目是否正確，記住 mod_dav_svn.so 和 mod_authz_svn.so必須在其他 mod_dav*.so 模組之後載入。<br />3. 檢查你加入的檔案。若dll檔沒有在正確位置，將無法正常啟動。</div>
<p></li>
</ol>
<h2><span style="font-size:85%;">2.3 設定 Subversion 檔案庫的路徑</span></h2>
<p>現在要設定Apache http.config檔中 SVN URL 路徑與檔案庫實體路徑的對應關係。對應的方式有兩種，分別是 SVNPath 與 SVNParentPath。</p>
<h3><span style="font-size:85%;">2.3.1 SVNPath</span></h3>
<p>SVNPath 適合用來個別指定檔案庫的路徑，語法是： </p></p>
<p><span style="font-family:Courier New;">DAV svn SVNPath /absolute/path/to/repository</span>
<p>其中 "/svn/repos_name" 就是用戶端存取特定檔案庫的 URI（Uniform Resource Indentifier），SVNPath 後面指定的路徑則是檔案庫的絕對路徑，假設我們的檔案庫實際存放的路徑是 d:\svn\MyProject，並且希望用戶端使用 http://myserver/svn/myprj 的 URL 來存取檔案庫，那麼要加入 httpd.conf 的內容就是：</p></p>
<p><span style="font-family:Courier New;">DAV svn SVNPath d:\svn\MyProject</span>
<p>注意 Location 標籤後面的 /svn/myprj 的第一個斜線不可少！</p></p>
<h3><span style="font-size:85%;">2.3.2 SVNParentPath</span></h3>
<p>如果你的檔案庫都集中放在某個目錄之下，例如：d:\svn，那你就可以使用 SVNParentPath 的方式指定檔案庫的根路徑，例如：</p></p>
<p><span style="font-family:Courier New;">DAV svn SVNParentPath d:\svn</span>
<p>這表示可以讓任何人都可以透過 http://myserver/svn/ 的方式，存取位於 d:\svn 這個目錄以下的所有檔案庫。也就是說，這個設定動作只需要一次，如果使用SVNPath，你必須為各個檔案庫分別指定對應的路徑。</p>
<p>以上兩種設定方式都可以，方便起見，這裡我用 SVNParentPath 來統一指定所有檔案庫的父層 URL 路徑。</p>
<p>將 的設定加到 Apache HTTP Server 的 httpd.conf 檔尾就行了。接著便可以開始建立檔案庫。<b> </b></p>
<p>
<h2><span style="font-size:85%;">2.4 建立Subversion檔案庫</span></h2>
<p>假設我們要把所有的檔案庫都放在 d:\svn 目錄下，現在要建立一個測試用的檔案庫，名稱叫做 repository，指令為：</p>
<p><span style="font-family:Courier New;">md d:\svn svnadmin create d:\svn\repository</span></p>
<p>命令執行完後，檢查看看 d:\svn\repository 目錄底下產生了哪些目錄和檔案。</p>
<table style="border:medium none;background:rgb(255,255,204) none repeat scroll 0 50%;-moz-background-clip:-moz-initial;-moz-background-origin:-moz-initial;width:100%;border-collapse:collapse;" border="1" cellpadding="0" cellspacing="0" width="100%">
<tbody>
<tr>
<td style="border:1pt inset rgb(17,17,17);padding:1.5pt;width:100%;" width="100%">
<p><span style="color:rgb(0,0,0);">警告：檔案庫絕對不可以在建立在任何遠端的儲存媒體上，例如：網路磁碟機。</span></p>
</td>
</tr>
</tbody>
</table>
<p>
<p>這時候你已經建立了一個檔案庫，你可以先在本機用瀏覽器測試一下，網址輸入<a href="http://localhost/svn/repository"><u>http://localhost/svn/repository</u></a>，看看能不能看到檔案庫的內容，正常的話應該像下圖一樣。<br /><img src="/img/image006.jpg" border="0" /></p>
<p>如果以上的測試可以通過，應該就行了。如果你還想要測試一下能不能從檔案庫取出整個工作複本，可以執行下列指令（非必要）: </p>
<p><span style="font-family:Courier New;">c: cd\temp svn co http://localhost/svn WholeRepos </span></p>
<p>上述指令會切換到一個暫時的目錄 c:\temp，然後從檔案庫取出整個工作複本。最後一行指令是要 svn.exe 執行 check out 動作（縮寫 co），如果正確的話，應該會顯示 "Checked out revision 0." 的訊息，此時 /svn/<br />這個檔案庫底下的所有檔案目錄都已經取出，並且複製一份到c:\temp\WholeRepos 目錄下了。</p>
<table style="border:medium none;background:rgb(255,255,204) none repeat scroll 0 50%;-moz-background-clip:-moz-initial;-moz-background-origin:-moz-initial;width:100%;border-collapse:collapse;" border="1" cellpadding="0" cellspacing="0" width="100%">
<tbody>
<tr>
<td style="border:1pt inset rgb(17,17,17);padding:1.5pt;width:100%;" width="100%">
<p><span style="color:rgb(0,0,0);">問題排除 : </span><span style="color:rgb(0,0,0);">如果顯示的錯誤訊息是：</span><span style="color:rgb(0,0,0);">svn: PROPFIND request failed on '/svn/repository'</span></p>
<p><span style="color:rgb(0,0,0);">svn: PROPFIND of '/svn/repository': 405 Method Not Allowed (http://localhost)</span></p>
<p><span style="color:rgb(0,0,0);">請檢查 Apache HTTP Server 的 httpd.conf 檔案裡面的 標籤所定義的位置是否跟你指定的URL<br />樣式相同，注意一定要完全相同，以上面的例子而言，你的 httpd.conf 的最後面應該會有以下文字： </span><span style="color:rgb(0,0,0);"></p>
<p>DAV svn SVNPath 指向檔案庫的絕對路徑</span></p>
<p><span style="color:rgb(0,0,0);">如果顯示的錯誤訊息是： </span><span style="color:rgb(0,0,0);">svn: PROPFIND request failed on '/svn svn: Could not open the requested SVN filesystem</span></p>
<p><span style="color:rgb(0,0,0);">那表示在 /svn 對應的實體目錄（即 d:/svn）下找不到所指定的目錄。</span></p>
<p><span style="color:rgb(0,0,0);">註：PROPFIND 是給 WebDAV 用的 HTTP method，用來從資源中取得屬性。</span></p>
</td>
</tr>
</tbody>
</table>
<p></p>
<p>測試完畢就可以把 WholeRepos 這個目錄整個刪掉了。
<p>到目前為止，可以確定檔案庫已經建立完成，接下來就可以匯入專案了。</p>
<h3><span style="font-size:85%;">2.4.1 匯入專案</span></h3>
<p>不用急著把你現有的正式專案匯入檔案庫，先建立一個用來測試的專案目錄就好了。我們先在 c:/temp 底下建一個 ProjectA 的專案目錄結構，參考下面的指令：</p>
<p><span style="font-family:Courier New;">c:\ </span><span style="font-family:Courier New;"><br />md temp </span><span style="font-family:Courier New;">cd\temp </span><span style="font-family:Courier New;"><br />md ProjectA </span><span style="font-family:Courier New;">md ProjectA\trunk </span><br /><span style="font-family:Courier New;">md ProjectA\branches </span><span style="font-family:Courier New;"><br />md ProjectA\tags </span><span style="font-family:Courier New;">svn import . http://localhost/svn<br />-m "Initial repository layout"</span></p></p>
<table style="border:medium none;background:rgb(255,255,204) none repeat scroll 0 50%;-moz-background-clip:-moz-initial;-moz-background-origin:-moz-initial;width:100%;border-collapse:collapse;" border="1" cellpadding="0" cellspacing="0" width="100%">
<tbody>
<tr>
<td style="border:1pt inset rgb(17,17,17);padding:1.5pt;width:100%;" width="100%">
<p><span style="color:rgb(0,0,0);">提示: </span><span style="color:rgb(0,0,0);">本文在執行 svn 命令時，都是使用 http 協定的方式，這樣我們可以確知 Subversion 與 Apache HTTP Server 的設定無誤，其他人就可以透過 Internet 存取檔案庫。當然你也可以用其他的協定，例如：<a href="///">file:///</a>，如果使用 file 協定，最後一行指令就變成：</span> </p>
<p><span style="color:rgb(0,0,0);">svn import . file:///d:/svn -m "Initial repository layout"</span></p>
</td>
</tr>
</tbody>
</table>
<p>
<p>命令執行無誤的話，應會看到如下的畫面：</p>
<p><img src="/img/image009.gif" border="0" /></p>
<p><img src="/img/image010.jpg" border="0" /></p>
<p>這時候 ProjectA 這個專案已經匯入檔案庫了，也就是說，其他使用者可以開始存取這個檔案庫的專案取出文件和程式碼了。你可以參考 Subversion 的官方手冊中關於 svn.exe 這個用戶端命令列工具的使用方法，多練習一下取出檔案、加入檔案、以及存入檔案等指令。萬一練習的過程中發生錯誤，或者檔案庫弄亂了，你可以把整個檔案庫的目錄砍掉，回到 2.4 節重新做一遍。</p>
<p>以下會進一步討論檔案庫和專案目錄結構的安排方式，如果你急著想試試看用戶端如何存取 Subversion 檔案庫，可以先跳到2.6 節或第 3 節。</p>
<h2><span style="font-size:85%;">2.5 檔案庫與專案的配置方式</span></h2>
<p>延續前面的範例，如果你再匯入其他專案，例如 ProjectB，那麼整個檔案庫的結構會變成這樣：</p>
<p>/svn/repository/ +-- ProjectA/ +-- ProjectB/</p>
<p>也就是說 repository 這個檔案庫裡面包含了兩個專案。</p>
<p>如果你希望為每個專案建立一個檔案庫，那麼在 2.4 節中建立檔案庫的指令就變成：</p>
<p><span style="font-family:Courier New;">md d:\svn svnadmin create d:\svn\ProjectA<br />svnadmin create d:\svn\ProjectB</span></p>
<p>這樣就變成有兩個檔案庫了，檔案庫名稱分別是 ProjectA 與 ProjectB。</p>
<table style="border:medium none;background:rgb(255,255,204) none repeat scroll 0 50%;-moz-background-clip:-moz-initial;-moz-background-origin:-moz-initial;width:100%;border-collapse:collapse;" border="1" cellpadding="0" cellspacing="0" width="100%">
<tbody>
<tr>
<td style="border:1pt inset rgb(17,17,17);padding:1.5pt;width:100%;" width="100%">
<p><span style="color:rgb(0,0,0);">提示 : </span><span style="color:rgb(0,0,0);">如果專案之間有共享的檔案，建議把這些相關的專案放進同一個檔案庫；如果專案之間彼此毫無關係，那就採用一個檔案庫放一個專案的方式，這種方式等於專案就是檔案庫。</span></p>
<p><span style="color:rgb(0,0,0);">第一種方式有個比較奇怪的「功能」你應該要知道，就是一個專案的 check in 動作，也會令其他專案的檔案的修訂版次遞增 ，如果這不是你想要的，請選擇第二種方式，即一個檔案庫只存放一個專案。</span></p>
</td>
</tr>
</tbody>
</table>
<h3><span style="font-size:85%;">2.5.1 專案的目錄結構</span></h3>
<p>這裡補充說明一下 ProjectA 的目錄結構。在 ProjectA 專案的根目錄下建立的 trunk、branches、和 tags 這三個目錄是有特別意義的，它們的作用分別是：</p>
<ul>
<li>trunk 目錄用來存份目前專案正在進行開發的程式檔案和文件 (又稱為主線，即 mainline)</li>
<li>branches 用來存放主線的各個仍在發展中的分支；</li>
<li>tags 則用來存放已經不再變動的分支，也就是其中的檔案不會再修改了。 </li>
</ul>
<p>這是 Subverion <a href="http://svnbook.red-bean.com/" target="_blank">官方手冊</a>建議的目錄結構安排方式，你可以自己決定要不要用這種配置方式，詳細說明請參考<a href="http://svnbook.red-bean.com/" target="_blank">官方手冊</a>的第五章，子標題為 "Choosing a Repository Layout"。</p>
<table style="border:medium none;background:rgb(255,255,204) none repeat scroll 0 50%;-moz-background-clip:-moz-initial;-moz-background-origin:-moz-initial;width:100%;border-collapse:collapse;" border="1" cellpadding="0" cellspacing="0" width="100%">
<tbody>
<tr>
<td style="border:1pt inset rgb(17,17,17);padding:1.5pt;width:100%;" width="100%">
<p><span style="color:rgb(0,0,0);">提示 : </span><span style="color:rgb(0,0,0);">目錄名稱建議盡量不要用中文名稱，這樣在使用命令列時比較方便，也比較不會有問題。</span></p>
</td>
</tr>
</tbody>
</table>
<p>
<h2><a name="_Ref123108759"><span style="font-size:85%;">2.6 使用 Windows </span></a><span style="font-size:85%;">網域帳戶驗證</span></h2>
<p>照著前面的步驟做，你會發現存取檔案庫時都不用輸入帳號密碼，這是因為我們之前的設定沒有啟用身分驗證的功能。但是我們通常不希望所有人都能任意存取你的檔案庫，免得重要資產外洩，或者資料被破壞，因此了解如何加入身分驗證也是必要的。</p>
<p>Serversion 提供了多種驗證使用者身份的方式，這裡只介紹 Windows 身分驗證的方式，這種方式很適合用在開發團隊成員都在區域網路內的情況。請依下列步驟進行：</p>
<p>
<ol>
<li>取得 SSPI 模組，下載網址為 <a href="http://tortoisesvn.tigris.org/mod_auth_sspi.zip">http://tortoisesvn.tigris.org/mod_auth_sspi.zip</a>。<br />英文說明在此：<a href="http://tortoisesvn.sourceforge.net/node/137">http://tortoisesvn.sourceforge.net/node/137</a><br /><a href="http://tortoisesvn.sourceforge.net/docs/release/TortoiseSVN_en/ch03.html#tsvn-serversetup-apache-5">http://tortoisesvn.sourceforge.net/docs/release/TortoiseSVN_en/ch03.html#tsvn-serversetup-apache-5</a></li>
<li>把 zip 裡面的 mod_auth_sspi.so 解壓縮到 modules 目錄下。</li>
<li>把下面這行加入到 Apache 的 httpd.conf 裡面：LoadModule sspi_auth_module modules/mod_auth_sspi.so<br />注意上面加入的這行一定要放在下面這行的前面：LoadModule auth_module modules/mod_auth.so</li>
<p>
<li>修改httpd.conf 的設定如下：<br />&lt;<span style="font-family:Courier New;">Location /svn&gt; DAV<br />svn SVNParentPath d:/svn<br />AuthType SSPI AuthName "Subversion 檔案庫"<br />Require valid-user<br />SSPIAuth On<br />SSPIAuthoritative On<br />SSPIDomain<br />SSPIOfferBasic On </span><br />其中 就是你的 Windows 網域控制器的電腦名稱（例如：WIN2KDC），注意兩邊的括號不用保留。如果你的環境沒有網域控制器，就維持原來的就行了。在我的環境下，我發現即使有網域控制器，但是這裡不去設定它，還是能夠正常的驗證使用者身分。</li>
<li>重新啟動 Apache。</li>
</ol>
<p>現在開啟瀏覽器，輸入網址 <a href="http://127.0.0.1/svn/repository">http://127.0.0.1/svn/repository</a> 看看，你預期應該會看到如下的驗證畫面：<br /><img src="/img/image013.jpg" border="0" /></p>
<p>若沒有出現這個畫面，而是直接顯示檔案庫內容，怎麼回事？</p>
<p>因為我們現在是使用 Windows 帳戶驗證，你目前已經登入這台機器了，而你要存取的也是本機的資源，換句話說，你的身分已經被驗證過了，所以就不會再要求你輸入帳號跟密碼，這是採用<br />SSPI 網域驗證的好處。</p>
<p>那麼，如果你的同事 John 的電腦有加入網域，但是他平時都是登入本機，而非登入網域，在存取檔案庫時會不會要求輸入帳號密碼？答案是如果 John 登入他本機的帳號和密碼跟他在網域使用者的帳號密碼完全一樣的話，就無需再輸入密碼；相反的，如果登入本機的使用者帳號和密碼與網域使用者帳號密碼不同，第一次存取時就必須輸入密碼。</p>
<p>你可以在別台機器上，用一個網域裡沒有的使用者帳號去存取 Subverion 檔案庫，如果正確的話，應該就會出現要求輸入帳號密碼的視窗。</p>
<p>以上還只是最基本的設定，如果你希望做些進階的設定，例如允許所有人都可以檢視檔案庫的內容，但是不能修改；或者要加入 SSL 加密機制，建議您參考 [TortoiseSVN 官方文件] 的第三章。</p>
<table style="border:medium none;background:rgb(255,255,204) none repeat scroll 0 50%;-moz-background-clip:-moz-initial;-moz-background-origin:-moz-initial;width:100%;border-collapse:collapse;" border="1" cellpadding="0" cellspacing="0" width="100%">
<tbody>
<tr>
<td style="border:1pt inset rgb(17,17,17);padding:1.5pt;width:100%;" width="100%">
<p><span style="color:rgb(0,0,0);">提示 : </span><span style="color:rgb(0,0,0);">啟用身分驗證之後，你會發現用命令列工具 svn.exe 存取檔案庫時，如果是用 http:// 協定，有些子命令（subcommand）執行時會出現 "authorization failed" 的錯誤，這時候你可以在<br />svn 命令中加入 --username 和 --password 來提供使用者名稱和密碼，例如： </span><span style="color:rgb(0,0,0);"></p>
<p>svn co http://myserver/svn/ --username michael --password guesswhat </span></p>
<p><span style="color:rgb(0,0,0);">或者你也可以改用 file:/// 協定。</span></p>
</td>
</tr>
</tbody>
<p></table></p>
<p><strong><span style="font-size:100%;">3. 安裝用戶端：TortoiseSVN </span></strong>
<p>現在你已經有一個可以在http存取Subversion 的伺服器，可以試著在其他電腦上存取檔案庫了。如果你習慣使用命令列工具，那就只要在用戶端電腦上安裝 Subversion 就行了，存取檔案庫都是透過命令列工具（主要是 svn.exe）。這裡要介紹的是一個專門為 Windows 作業系統設計的 Subversion 用戶端：<a href="http://tortoisesvn.tigris.org/" target="_blank"><u>TortoiseSVN</u></a>（以下簡稱 TSVN）。</p>
<h2><span style="font-size:85%;">3.1 安裝 TortoiseSVN</span></h2>
<ol>
<li>到 http://tortoisesvn.tigris.org 下載最新的安裝程式，下載後直接安裝。安裝過程大都是按下一步，只有在問你安裝完成後會要求你重新開機。</li>
<li>到 http://tortoisesvn.tigris.org 下載繁體中文的語言包（language pack），請注意語言包的版本應該要跟你安裝的 TSVN 版本相同，否則最好不要安裝。語言包裝完之後，用檔案總管在 Windows 桌面上或任何一個資料夾上點一下滑鼠右鍵，選擇 TortoiseSVN -&gt; Settings 以開啟設定視窗，在 "Main" 頁夾中更改 Language 設定為「中文(繁體)」，再按「確定」鈕即可。</li>
<li>如果你是透過 proxy server 存取 Internet，請在 TSVN 的設定視窗中，切到「網路」頁夾，然後輸入你的 proxy server 相關資訊，否則你將無法存取位於 Internet 上的檔案庫。</li>
</ol>
<p>安裝完成之後，在任何目錄名稱上點一下滑鼠右鍵都可以看到 TSVN 的功能選項，這也是 TSVN 方便的地方，它不用跟開發工具整合，而是跟作業系統整合在一起，這樣不管你用什麼開發工具，都可以輕鬆的使用 TSVN 來存取檔案庫。</p>
<p>接下來你可以用 TSVN 練習一下存取之前建立好的檔案庫，試著把你現有的專案匯入檔案庫中，並且在用戶端使用 TSVN 執行取出、存入、更新等動作。 </p>
<p>TSVN 雖然是用戶端工具，不過它也提供了建立檔案庫、以及匯入、匯出等功能，因此安裝在伺服器端也挺方便的。</p>
<p>4. 結語
<p>按照本文說明的安裝步驟，希望能讓你順利在 Windows 環境下把 Subversion 安裝起來。但是安裝成功以後，真正的工作要才開始，如果你沒有花點時間閱讀 Subversion 的相關文件，在使用版本控制系統的過程中，一定會碰到許多問題。</p>
<p>在正式將你的專案加入 Subversion 檔案庫之前，建議您多考慮一下：</p>
<ul>
<li>檔案庫的配置方式。究竟要為每一個專案建立一個檔案庫，還是把多個專案放進同一個檔案庫裡？ </li>
<li>專案目錄的結構。你要依照官方手冊的方式，在專案的根目錄下建立 trunk、branches、和 tags 嗎？ </li>
<li>哪些東西要放進檔案庫裡？ </li>
<p></ul>
<p>前兩個問題你可以參考 [Subversion電子書第五章] 的建議，再衡量自己的需求來決定。你不見得要依照官方的建議，第一次也許採用最單純的配置方式會比較好，例如：一個檔案庫就只放一個專案，而且只把程式的原始碼 放進檔案庫，也不去分主線支線了，因此專案的目錄結構可以很單純，程式原始碼的根目錄就是專案的根目錄。自己動手做過幾次以後，再去觀察檔案庫的內容，就會比較有感覺了，然後再來考慮自己團隊的需求，自然就能找到最適合自己團隊的配置方式了。</p>
<p><strong><span style="font-size:100%;">後記</span></strong></p>
<p>原始發表人：蔡煥麟</p>
<p><strong>延伸閱讀：</strong></p>
<ul>
<li>蔡煥麟 .NET Magazine更新版：<a href="http://www.netmag.com.tw/member/netmag_article/N051204703.pdf">http://www.netmag.com.tw/member/netmag_article/N051204703.pdf</a></li>
<p>
<li>Subversion電子書：<a href="http://svnbook.red-bean.com/">http://svnbook.red-bean.com/</a><br />(繁體中文版：<a href="http://svn.ntcu.net/svnbook/" target="_blank">http://svn.ntcu.net/svnbook/</a>)</li>
<p>
<li>TortoiseSVN 官方文件。<a href="http://tortoisesvn.tigris.org/docs.html#DocDir" target="_blank">http://tortoisesvn.tigris.org/docs.html#DocDir</a></li>
<li>Subvision Wiki：<a href="http://svn.ntcu.net/kwiki/">http://svn.ntcu.net/kwiki/</a></li>
<li>OpenFoundry SVN使用手冊：<a title="OpenFoundry SVN使用手冊" href="http://rt.openfoundry.org/Foundry/Help/4-02.html#sec3" target="_blank">http://rt.openfoundry.org/Foundry/Help/4-02.html#sec3</a></li>
</ul>
