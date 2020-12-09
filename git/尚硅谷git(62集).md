## git版本控制(尚硅谷)

### 03.版本控制系統功能

1. 團隊多人協同開發
2. 數據備份
3. 版本管理：git採用文件系統快照方式保存
4. 權限管理：有利於團隊協同開發，更可提供團隊以外開發者貢獻代碼進行審核。
5. 歷史紀錄：可查閱修改紀錄並允許版本回退功能。
6. 分支管理：允許團隊多人同時多條生產線進行開發任務，提高效率。

### 05.git優勢:分散式管理
1. 大部份操作在本地端完成,不需要連結網路
2. 完整性保證-->hash演算法
3. **作用原理:儘可能添加內容而不是刪除或修改內容**-->版本回退
4. **Git跟踨並管理的是修改,而非文件**
5. 分支管理--分支操作非常快捷流暢-->**文件系統快照**處理
6. 與linux命令全面兼容
7. 權限管理:可對團隊以外開發者貢獻的代碼進行審核

### 07.git結構

- 工作流程
  工作區 add--> 暫存區 commit--> 本地庫 push --> github代碼托管中心:負責維護遠端庫
                                       pull <-- 第一次clone <-- github

### 08.git和代碼托管中心

代碼托管中心的任務：維護遠程庫。,

1. 區域網路：GitLab服務器
2. 廣域網路：
   - GitHub(https://github.com)
   - 碼云(https://gitee.com)

### 09.本地庫和遠程庫交互方式

Git 會把檔案標記為三種主要的狀態：已修改(modified)、已暫存(staged)及已提交(committed)
  - 已暫存:若檔案被檢出後已被修改，但未被暫存,代表這檔案將會被存到下次你提交的快照中。
  - 已修改:若檔案先被修改，且被增加(add)到暫存區域但尚未提交到本地端資料庫。 
  - 已提交:若檔案已被存於Git資料夾(本地端資料庫)內。 

Git 專案的三個主要區域：工作目錄(working directory)、暫存區(staging area)以及Git 資料夾(git本地端資料庫)。
  - 工作目錄是專案被檢出的某一個版本。 這些檔案從 Git 目錄內被壓縮過的資料庫中拉出來並放在硬碟供你使用或修改。
  - 暫存區是一個單一檔案，一般來說放在 Git 目錄下，儲存關於下次提交的資訊。 有時它會稱為索引「index」，但現在更常被稱呼為暫存區。
  - Git 資料夾是 Git 用來儲存你專案的後設資料及物件資料庫的地方。 這是 Git 最重要的部份，而且當你克隆一個其他電腦的儲存庫時，這個資料夾也會被同時複製。

將常用字設定為簡寫
git config --global alias.st status   將status簡寫為st
git config --global alias.co checkout
git config --global alias.rst reset HEAD
上述這些設定會存儲在 ~/.gitconfig中
git book有中文版  https://git-scm.com/book/zh-tw/v2

- 使用--system 系統所有使用者和使用者倉儲的預設設定  -> /etc/gitconfig
- 使用--global 個人帳號專用的設定檔 -> ~/.gitconfig
- 使用--local  個別本地端倉庫設定檔 -> .git/config

**本地庫初始化(使用前環境配置)
- git --version 查看git版本
1.git init 初始化倉庫,內含.git目錄,不要刪除,否則git無法正常運作,使該目錄夾作為本地庫受git追踨管制。
  - 系統用戶級別:--global 指登入作業系統的用戶,設置的user name和email與遠端庫的帳號密碼無關,僅作為區分文件作者
  - 項目級別:   --local  僅在當前本地庫(目錄夾)有效-->就近原則,優先使用項目級別的user name和email。
2.git config --global user.name 'ronghon'  可加入--global參數代表系統用戶級(全局),
  git config --global user.email 'ronghon1969@gmail'  配置user.name和email的作用:用於區分不同開發人員身份,與登錄github遠程庫登錄帳號無關
  git config --list 或git config -l 檢視目前環境設定狀況或者用下列兩個指令檢查設定檔
  git config --global user.name 新名 -->如欲修改新的user.name直接輸入新名即可
  git config --unset user.name -->刪除user.name
    cat .git/config 用來查看user--各別項目級別的config  使用--loacl設置
    cat ~/.gitconfig 用來查看user--系統用戶級別的gitconfig,通常設置此項即可,特殊用途才會用到項目級別設置 使用--global設置
    cat .git/COMMIT_EDITMSG 查看上一次commit資訊
3.git status 查詢工作區、暫存區異動狀態
4.git help 欲查詢之命令  或  git 欲查詢的命令 --help 
5.使用git show來檢視最後一次提交的patch所修改的內容,如要檢視某一次修改的內容時,使用git show commit-id(前六碼即可)
6.git diff 檔案名:尚未提交到版本庫前查看比較檔案修改狀況


**取得一個 Git 倉儲
  1.將現有的專案或者資料夾匯入 Git  -->git init 或匯入
  2.從github伺服器克隆（clone）一份現有的 Git 倉儲 -->git clone 遠端空間的網址 本機資料夾名稱 -->第一次下載GitHub雲端專案

**提送流程  
  工作區 -> git add 檔案名稱 ->暫存區 -> git commit -m 'message' ->本地端倉庫 -> git push <url>遠程庫  
  untracked:
   git checkout -- file name
tracked:
  + 放棄修改：修改後尚未add至暫存區前放棄修改使用　git restore (file name)
  + 回退工作區：git add 至暫存區後回退至修改前工作區　git restore --staged (file name)
  + 直接提交本地庫: git commit -am 'commit message'

tracked   <-- git reset HEAD  
  工作區 -> git commit -am 'message' -> 本地端倉庫(對untracked檔案無效) 修改部份直接提交本地端倉庫  

  - 使用 git add . 或 git  add -A 或 git add --all 可一次將工作區的檔案狀態(Untracked files或 Changes not staged for commit) "全部"添加到暫存區

**刪除檔案
  1.使用git rm 刪除 (檔案已add至暫存區時)
    (1)真刪：git rm 檔名
      1.刪除了一個文件 --> git rm 檔名
      2.需將刪除文件的資訊提交 --> git commit -m 'delete 檔名'
    (2)誤刪：若要恢復被刪除的文件,需進行下列兩個動作:
      1.git reset HEAD 檔名-->將待刪除的文件從暫存區恢復到工作區
      2.git checkout -- 檔名-->將工作區中的修改捨棄掉
  2.直接使用 rm 檔名：被刪除的文件並未納入暫存區中
   -> 需使用git add 和 git commit 兩步驟將刪除紀錄提交
   -> 誤刪時需先git add 再 git reset 和 git checkout 
  3.使用git rm --cached 檔名 -> 並不是真的把檔案刪了,而僅是把檔案從 Git 中移掉而已變成untracked

**更名檔案  mv 是操作尚未添加到暫存區的檔案更名, git mv 則是已添加到暫存區的檔案更名
  1.直接更名 mv 舊名 新名 -> 需git add 和 git commit
	(1)尚未git add 至暫存區者,直接使用mv更名即可
	(2)已提交暫存區狀態時,使用mv更名,需使用git  add/rm 將舊檔名被刪除紀錄提交,再使用git add 將新檔名
	   加到暫存區,再git commit 提交到工作目錄
  2.使用git mv 舊名 新名 (主要是針對檔案已提交暫存區的檔案更名) 
	(1)檔案在暫存區時,使用git mv 是直接更名
	(2)檔案已提交至工作目錄時,需使用git commit 將更名紀錄提交 
		
**修改 commit message紀錄
  1.把 .git 目錄整個刪除(誤):把該專案所有的 Git 紀錄全部清掉，除非必要，不要輕易使用
  2.使用 git rebase 來修改歷史: git rebase -i sha --> -i 參數是指要進入 Rebase 指令的「互動模式」,sha指要從現在到那一個commit 
    -->進入編輯模式 --> pick  保留不修改(p)  reword 修改(r)
  3.先把 commit 用 git reset 拆掉,整理後再重新 Commit。
  4.使用 --amend 參數來修改最後一次的 commit:直接使用 git commit -m --amend 'message'就可修改最後一次提交的訊息。

**git log 查看提交紀錄日誌
    git log --pretty=oneline
    git log --oneline(簡潔版)
  git reflog 查看所有操作命令紀錄日誌,用來紀錄你的每一次命令
  git reflog:HEAD@{數值}-->數值指移動HEAD從當前版本到目標要多少步

**版本回退  commit-->版本快照   
 撤銷:
  1.工作區階段:當你改亂了工作區某個文件的內容,想直接丟棄工作區的修改時,用命令git checkout -- file
  2.暫存區階段:當你不但改亂了工作區某個文件的內容,還添加到暫存區時,想丟棄修改,分兩步,第一步git reset HEAD <file>,第二步git checkout -- file
  3.版本庫階段:已經提交了不合適的修改到版本庫時,想要撤銷本次提交,使用版本回退,如下

 版本回退  
  -直接倒退到某一特定版本 -->使用索引值  git reset --hard commit_id -->可返回到任意版本,使用時請先確認版本(建議使用此法)
  -僅倒退到前一版本      -->使用HEAD^   git reset --hard HEAD^    -->後退到前一版本,使用N個^即往前回退N的版本
  -一次倒退N個版本       -->使用HEAD~N  git reset --hard HEAD~3   -->往後退三個版本

 reset 重置HEAD  HEAD指向的是當前分支的版本
  --soft:僅在本地庫移動HEAD指針,只有本地庫向倒退
  --mixed:在本地庫移動HEAD指針,且重置暫存區,只有本地庫及暫存區向後倒退
  --hard: 在本地庫移動HEAD指針,且重置暫存區及工作區,三者一起向後倒退

Git跟踪并管理的是修改,而非文件,每次修改均需git add到暫存區(stage)內,git commit提交時,只會將已add到暫存區內的增刪改提交到所屬分支的版本庫中。

1.git checkout -- 檔案名 ->捨棄工作區的檔案修改
2.git reset HEAD <file> ->修改工作區某個文件的内容,且已add添加到了暫存區,想捨棄文件的修改時
3.已經提交了不合適的修改到版本庫時,想要撤销本次提交,則使用上面之版本回退功能

刪除文件
1.真刪:
  rm 檔案名 刪除工作區檔案 -> git rm 檔案名 且 commit 提交本次刪除作業 刪除版本庫檔案
2.誤刪
  git checkout -- file 將誤刪的檔案從版本庫中再次回復回來到工作區    
**比較文件diff  
+ 使用 git diff <file> 查看 "特定" 被修改檔案的內容
+ 使用 git diff 查看 "全部" 被修改檔案的內容
  - 作用原理:將工作區中的文件和暫存區進行比較
    git diff [本地庫中歷史版本][檔名]-->將工作區中的文件和本地庫歷史紀錄作比較,如未輸入文檔名,則比較多個文件
+ git diff 只能檢視(尚未提交)Changes not staged for commit 區塊的修改內容
+ 如果想要檢視(已提交)Changes to be committed 的修改內容，就必須在後面加上 --cached 或是 --staged 的參數
  
  分支管理(branch)
    git branch -v  查詢目前分支狀況
    git branch 分支名  創建新的分支
    git checkout 分支名  切換到那一個分支
    合併分支:
      第一步:切換到接受修改的分支(被合併,增加新內容)
      git checkout [被合併的分支名]
      第二步:執行merge命令 git merge [新內容的分支]
    解決衝突:
      衝突表現


  git ls-files 查詢本地倉庫有多少檔案尚未上傳