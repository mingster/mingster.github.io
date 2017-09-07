---
layout: post
title: Chinese Article about eXtreme Programming
date: 2007-09-02 23:10:00.000000000 +08:00
type: post
published: true
status: publish
categories:
- 軟體工法
- 軟體新知
tags: []
meta:
  blogger_blog: mingstert.blogspot.com
  blogger_permalink: "/2007/09/chinese-article-about-extreme.html"
  _jetpack_related_posts_cache: a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1446677097;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:44;}i:1;a:1:{s:2:"id";i:338;}i:2;a:1:{s:2:"id";i:350;}}}}
  original_post_id: '54'
  _wp_old_slug: '54'
author:
  login: mingster
  email: mingster.tsai@gmail.com
  display_name: mingster
  first_name: ''
  last_name: ''
---
<p>This is good intro in Chinese about XP programming. Finally there's more talk in Taiwan about iton a major IT publication.</p>
<p>If you interested in xp, also check out <a href="http://mingstert.blogspot.com/2007/09/what-is-extreme-programming.html">my older post</a>. You should also know about <a href="http://mingstert.blogspot.com/2007/09/introduction-of-aglie-development.html">Aglie Programming</a>.<br /><span class="text12" style="color:rgb(111,111,111);">文/<a href="http://www.ithome.com.tw/">李延華</a> (記者) 2007-09-02<br /></span><br />極限編程：訴求擁抱改變、注重溝通與測試，適合小團隊開發的敏捷開發方法論<br />在軟體開發領域談到「XP」，可不是指Windows XP，而是eXtreme Programming（極限編程）。</p>
<p>落實XP方法論的第一步，是拿起扳手與螺絲起子，拆除辦公室的隔板。因為XP強調的4個價值觀──溝通（Communication）、簡單（Simplicity）、回饋（Feedback）與勇氣（Courage），重點就是希望建立暢通而有效率的溝通管道。</p>
<p>另有12項實務，包括客戶駐廠（On-Site Customer）、系統隱喻（System Metaphor）、程式共享（Collective Ownership）、重構（<a>Refactoring</a>）、搭檔編程（<a>Pair Programming</a>）、編程標準（<a href="http://mingstert.blogspot.com/2005/08/c-c-coding-guidelines.html">Coding Standards</a>）簡單設計（Simple Design）、測試先行（Test Before Coding）、通盤規畫（The Planing Game）、小型改版（Small Release）、持續整合（<a>Continuous Integration</a>）、四十工時（Forty-Hour Week）等。</p>
<p>XP的簡單設計與靈活因應需求改變的主張，吸引所有人的目光，不過，我們不能忽略測試驅動（Test Driven）這個重要的原則。「測試」在XP中是必要的條件。</p>
<p>由於需求是不斷改變的，所以XP建議擁抱改變。而測試案例的目的，就是為了因應改變，而建置健全的測試案例將使專案無懼改變。</p>
<p>此外，不是所有的專案都適合XP，它適合2～12人的開發團隊，特別是應用在需求經常改變的領域。管理者、客戶及開發人員對XP而言，都是專案的成員，必須透過充分的溝通與回饋，才能讓每個成員都了解目前的版本能否滿足需求。文⊙李延華</p>
<p>Iteration 往覆式開發方法<br />早期的開發方式通常是瀑布式（Waterfall），從分析、設計、實作、測試到交付，是一路到底、不可逆的過程，然而這種方法在軟體業卻存有很大的風險。</p>
<p>由於客戶的需求經常改變，而且開發者憑自己的想像所開發的系統，也未必符合客戶的期望，因此許多方法論改採往覆式開發，每次設計、實作、測試與交付都採最小規模的方式。若不符客戶需求的設計，便可即早發現，進而修正。</p>
<p>Feedback 回饋<br />回饋與往覆是息息相關、互為因果的事件。在XP中，客戶與開發團隊之間的互動決定專案的成敗，客戶的回饋能提供專案後續發展的寶貴訊息。</p>
<p>在12項實務中，「客戶駐廠」也是呼應「回饋」的做法，而這個價值觀點出在XP方法論中客戶對專案的重要性。因為藉由客戶即時的回饋，開發團隊可以盡早了解問題與風險所在，即時修正不符合客戶預期的設計，朝正確的方向發展。</p>
<p>Simplicity 簡單<br />以瀑布式的開發方式為例，在實作系統之前，必須先做好完整的需求分析與系統設計。而且技術人員為了讓系統保持最大的彈性，往往在架構上預留擴充的空間。</p>
<p>但是XP方法論認為，客戶的需求隨時在改變，而且環境與技術也不斷地更新，所以預留彈性反而是增加包袱，因此建議開發者盡可能保持符合需求的最簡單版本，不要預想未來可能的功能，以控制成本、降低風險。</p>
<p>System Metaphor 系統隱喻<br />在XP中，每個人同時扮演系統分析師、系統設計師和程式開發者的角色，藉由客戶駐點，面對面溝通的方式，取得第一手的需求，然後直接做給客戶看。</p>
<p>為確保彼此的溝通沒有誤解，因此必須善用隱喻，讓客戶與開發者有共通的語言，利用說故事和打比方的方式，取代冗長而難以理解的文件。比喻的用語可以與IT無關，盡量以易於了解的方式，表達需要的功能。</p>
<p>Pair Programming 搭檔編程<br />兩個人共同開發一隻程式，一個人在寫程式的時候，另一個人需負責看程式，以檢查是否有出錯或可改進的部分，而且兩人要經常互換角色。</p>
<p>不過，搭檔編程通常是XP各項實務中最難被主管接受的一項，因為從成本與效率的觀點出發，大家各寫各的程式，將有兩倍的工作效率。再加上，管理者不容易確保看程式的人工作的品質，無法得知他是在發呆還是認真檢視程式碼。</p>
<p>Collective Ownership 程式共享<br />搭檔編程還有進階應用，就是搭檔關係也要經常替換（Switch Pair）。當使用者提出新的需求時，開發者就會被分配與新的對象合作，一起修改其他人合作開發的部分，並加入新的功能。</p>
<p>團隊的每個成員都有機會轉換與不同的對象搭檔，合作開發系統的各個部分，所以所有人也就都有能力修改與維護系統的每個部分，這樣的做法即是「程式共享」。</p>
<p>Continuous Integration 持續整合<br />在開發期間，當一組搭檔共同完成一個使用案例（User Story），並通過單元測試過後，便可以將程式簽入集中管理的版本控管系統，重新建構一次系統，並諮詢其他搭檔，執行所有測試。採用XP方法論一天內可能建構系統好幾次。</p>
<p>系統整合與測試之後，經由測試執行結果，可以讓開發團隊與駐點的客戶了解系統現階段確實可執行的功能是否符合需求，並掌握開發的進度。</p>
<p>Small Release 小型改版<br />依照XP的方法論，通常開發團隊是依據Story Card切割工作。每完成一個Story Card，就發行最新、可執行的版本，交由客戶驗收。此即XP所謂的「小型改版」。</p>
<p>客戶如果頻繁地檢視最新版的系統，便可確認專案是否符合期望，然後回饋意見作為開發團隊持續改進的參考。依照XP的要求，開發團隊至少每3周就要重新整合新功能到產品中，發行新版本，交由客戶驗收，並檢視未完成的需求。</p>
<p>Refactoring 重構<br />重構的意思，是指在不改變程式碼的外部行為的情況之下，修改程式碼，以改善內部的一致性和清晰性。根據XP的方法論，在每個小階段發行以及每個往覆式的周期之後，甚至是每天下班前，都可以執行一次重構。</p>
<p>重構通常是透過開發工具輔助執行，一般不會影響程式執行的結果，但為了確保重構之後，不會改變程式碼的行為及影響功能的正確性，開發團隊必須齊備完善的測試機制。</p>
