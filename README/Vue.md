# Vue

## 脚手架

注意我们使用最新的vuecli 3.0版本

## 部署

### 原理

原理类似于GIthub Pages。index.html丢上去，浏览器去解析静态html，并加载html链接的js和css。

#### 为什么可以放在cdn上？

<u>思考过程：</u>

*对于一个html，他里面的js和css资源是可以用链接的形式加载的*
*只需要把js和css，图片都放在cdn上，html链接使用就行了*
*在存储空间上如果支持相对路径访问的话应该直接就行了吧*

### 性能和成本

#### 并发量，带宽，速度

选用又拍云cdn存储，云存储自带cdn加速。因为CDN加速，我们就不用考虑并发量和带宽！

#### 价格
cdn分为cdn存储和cdn流量，腾讯云虽然提供免费10g的cdn存储，但却不提供免费的cdn流量，坑！我们选用又拍云并加入又拍云联盟，可以获取10G免费存储和每个月15G的免费流量，超出后按0.29元/G价格收取。

另外，绑定域名即可映射到自定义域名进行访问，使用测试域名不能在微信上访问，必须申请域名访问。

## 服务器购买

一开始的想法是服务器必须满足存放静态网页，高并发量，足够带宽。所以在服务器配置的选择上纠结了很长时间。现在经过调研，我们这种对运维不熟悉且服务场景较为简单的场景适合采用ServerLess服务架构。附上微服务架构和ServerLess的相关资料，微服务主要用于分布式。

### 微服务

[什么是微服务架构？](https://www.zhihu.com/question/65502802)

### ServerLess

[从IaaS到FaaS—— Serverless架构的前世今生](https://aws.amazon.com/cn/blogs/china/iaas-faas-serverless/)

[花了 1000G，我终于弄清楚了 Serverless 是什么（上）：什么是 Serverless 架构？](https://zhuanlan.zhihu.com/p/31122433)

[Serverless(无服务器架构)4大优点和缺点](https://blog.csdn.net/happyfreeangel/article/details/83713623)

### 选定ServerLess

[腾讯云 Serverless 技术演进](https://www.infoq.cn/article/SZzkUKeqdxpP5FkNPZOQ)

[价格](https://cloud.tencent.com/document/product/583/17299)

## 监控

### 记录请求量访问量

可以通过搜索服务下的热门页面，一般我们这种场景下都是html。可以查看html的访问次数。也可以通过导出文件的方式筛选查看

这个需要您通过日志来筛选，打开https://console.upyun.com/toolbox/log/log_analy/  可以下载每天的日志， 下载后按照可是，也就是文件的后缀名 比如 html  来筛选出来，

```shell
$remote_addr - $remote_user [$time_local] "$request_method $scheme://$http_host$uri$querystring $server_protocol" $status $body_bytes_sent "$http_referer" "$http_user_agent" $content_type $request_content_length $cache_hit $source_code $is_dynamic $cache_control $request_time $edge_server_ip  
```

### 一键部署

类似于hexo博客部署的套路，我们可以实现静态网页的一家部署。在项目里写好脚本，对接又拍云接口。

本地保存一份又拍云接口操作员的账户密码和云存储的信息，读取信息利用js脚本实现一键部署。