# day01
## 1. git基本操作
    1). 创建本地仓库
        创建.gitignore配置文件
        git init
        git add *
        git commit -m "xxx"
    2). 创建github远程仓库
        New Repository
        指定名称
        创建
    3). 将本地仓库推送到远程仓库
        git remote add origin https://github.com/zxfjd3g/170612_JSAdvance.git 关联远程仓库
        git push origin master
    
    4). push本地的更新 
        git add *
        git commit -m "xxx"
        git push origin master
    
    5). pull远程的更新
        git pull origin master
            
    6). 克隆github上的项目:
        git clone https://github.com/zxfjd3g/xxx.git
        
## 2. git分支/合并/冲突
    1). 分支相当于是一个副本, 在新分支上更新不会影响原分支
        创建新分支: git branch xxx
        切换到另一分支: git checkout xxx
        推送新的分支到远程: git push origin xxx
    2). 合并分支: 将另一个分支的代码合并到当前分支来
        git merge xxx
    3). 冲突: 如果合并的2个分支同个文件同位置有不同内容就会出冲突
        修改文本内容
        git add *
        git commit -m "resolve conflict"

## 3. git二种拉取: pull与fetch
    1). pull: 拉取远程的更新到本地仓库的当前分支, 并自动合并
    2). fetch: 拉取远程的更新到本地仓库的新分支上, 需要手动合并到当前分支
    
## 4. git公司多人协作与开源项目多人协作
    1). 公司多人协作: 先在github上创建组织(修改权限), 多个同事加入此组织, 在组织下创建项目, 成员都可以进行推送更新
    2). 开源多人协作: fork仓库到自己的账户下, 修改fork仓库的代码, 向原仓库发起一个pull request, 对方接收到请求后可以选择合并

## 5. github二种请求方式
    1). https: 任何人都可以clone, 推送时需要指定username/password
    2). ssh: 只能是有ssh key的开发人员才能操作, 推送时不需要指定username/password

## 6. 项目开发准备
    1). 项目描述: 整体业务功能/功能模块/主体的技术/开发模式
    2). 技术选型: 数据展现/用户交互/组件化, 后端, 前后台交互, 模块化, 项目构建/工程化, 其它
    3). API接口: 接口的4个组成部分, 接口文档, 对/调/测接口

## 7. 搭建项目
    1). 使用create-react-app脚手架创建模板项目(工程化)
    2). 引入antd-mobile, 并实现按需打包和自定义主题
    3). 引入react-router-dom(v4): 
        HashRouter/Route/Switch
        history: push()/replace()/back()
    4). 引入redux
        redux/react-redux/redux-thunk/
        redux: createStore()/combineReducers()/applyMiddleware()
        react-redux: <Provider store={store}> / connect()(Xxx)
        4个重要模块: reducers/store/actions/action-types
        
# day02
## 1. 登陆/注册界面
    1). 创建3个1级路由: main/login/register
    2). 完成登陆/注册的静态组件
        antd组件: NavBar/WingBlank/WhiteSpace/List/InputItem/Radio/Button
        路由跳转: this.props.history.replace('/login')
        收集表单输入数据: state/onChange/变量属性名
        抽取组件: logo

## 2. 创建后台应用
    1). 使用webstorm创建基于node+express的后台应用
    2). 自定义测试路由
    3). 使用nodemon库来实例自动重运行

## 3. 使用mongoose操作数据库
    1). 连接数据库
    2). 定义schema和Model
    3). 通过Model函数对象或Model的实例的方法对集合数据进行CRUD操作 
    
## 4. 注册/登陆后台处理
    1). models.js
        连接数据库: mongoose.connect(url)
        定义文档结构: schema
        定义操作集合的model: UserModel
        const {UserModel, ChatModel} = require('./models')
   
    2). routes/index.js
        根据接口编写路由的定义
        注册: 流程
        登陆: 流程
        响应数据结构: {code: 0, data: user}, {code: 1, msg: 'xxx'}