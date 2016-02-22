<?php
//error_reporting(0);#关闭 PHP 提示的方法 或者修改 php.ini 的 error_reporting = E_ALL & ~E_NOTICE
// $str = "hello";
// $arr = array("string",123,3.14);;
// echo $str . "world";
// echo "<br>";
// var_dump($arr);
// echo "<br>";
// $t = date("H");
// echo $t;
// echo "<br>";
// $a = 1;
// $a += 1;
// echo $a;
// 
// for ($i=0; $i < 5; $i++) { 
// 	echo $i."<br>";
// }
// $b = 1;
// $b = "oop";
// echo $b . "9";
// 
// $variable = array('red'=>1,"gr"=>2.2,"bl"=>"hello");
// echo count($variable); 
// echo "<br>" ."foreach" ."<br>" ;
// foreach ($variable as $key => $value) {
// 	echo $key ."<br>" .$value."<br>" ;
// }
/////////////////////
//接收来自表单数据
// echo $_POST["user_name"];
// echo "<br/>";
// echo $_POST["pass_port"];

// $a = array('1' => 11,'2' => 22 );
// $b = $a;
// $b = 2;
// var_dump ($a);
// echo "<br>";
// var_dump ($b);

//类型强制转换
// $foo = -1;
// echo "转换前: \$foo=".$foo;
// echo "<br/>";
// echo "<br/>";

// $foo=(boolean)$foo;
// echo "转换后:  \$foo=".$foo;

//数组允许在往后自行添加
// $arr = array('1' => 1, '2' => 2,'3'=>'3');
// $arr['4']=4;
// var_dump($arr);
// arsort($arr);//ksort顺  逆arsort  针对值进行排序  而不是索引
// echo "<br/>";
// echo "<br/>";
// var_dump($arr);

//常量
// define(ABC,"我是常量");
// echo ABC;
// echo "<br>";
// echo "<br>";
// echo "文件路径: ".__FILE__;
// echo "<br>";
// echo "当前代码行数: ".__LINE__;
// echo "<br>";
// echo "php的版本: ".PHP_VERSION;
// echo "<br>";
// echo "php所运行的操作系统: ".PHP_OS;

//函数的应用
// function add($x,$y){
// 	return $x+$y;
// }
// $s = add(3,15);
// if ($s > 10) {
//  	echo "if 10";
//  }
//  else
//  {
//  	echo "else " .$s;
//  }

//session应用 配合test2.php
// session_start();
// echo $_SESSION['user']."<br/>";
// echo $_SESSION['explain']."<br/>";
// echo '<a href="test2.php">返回test2.php</a>';
/*
//上传文件
//将文件移至服务器的根目录upload下,upload要事先建好
$doc_root = $_SERVER["DOCUMENT_ROOT"];
// $upload_path = $doc_root."/file";
// logr($upload_path);

$dest_file = $doc_root."/upload/".basename($_FILES["myfile"]["name"]);
//logr($dest_file);

// myfile是html里面的<input name="myfile" type="file" />
// $_FILES["myfile"]["name"] --客户端源文件名称
// $_FILES["myfile"]["type"] --上传文件类型
// $_FILES["myfile"]["size"] --表示上传的文件大小 单位:字节
// $_FILES["myfile"]["tmp_name"] --表示文件上传后,在服务端存储的临时文件名
// $_FILES["myfile"]["error"] --表示和文件上传的相关错误信息
// 
// echo "name == ".$_FILES["myfile"]["name"]."<br/>";
// echo "tmp_name == " .$_FILES["myfile"]["tmp_name"]."<br/>";
//将临时文件 移至 目标文件
if(move_uploaded_file($_FILES["myfile"]["tmp_name"],$dest_file))
{
	echo "文件已上传至服务器根目录的upload目录下";
}
else
{
	echo "文件上传时发生了一个错误".$_FILES["myfile"]["error"];
}
*/

//数据库
// $link=mysqli_connect("127.0.0.1","root","123456");
// if(!$link) 
// 	echo "Mysql数据库连接失败!";
// else 
// 	echo "Mysql数据库连接成功!";
// echo "<br/>";

// mysqli_select_db($link,"mytest");

// $sql = "SELECT * FROM `test1`";
// $reult = mysqli_query($link,$sql) or die("无效查询: " . mysql_error());
// if ($reult) {
// 	echo "success";
// }
// else
// {
// 	echo "failed";
// }
// //$reult = mysqli_query($sql,$link);

// mysqli_close($link);

//thinkPhp
//THINK_PATH------框架目录
//APP_PATH--------应用目录
//RUNTIME_PATH----应用运行时间目录(可写)
//APP_DEBUG-------应用调试模式(默认为false)
//STORAGE_TYPE----存储类型(默认为File)
//APP_MODE--------应用模式(默认为common)
//

//多入口处理:建立多个类似test.php来布置不同的项目工程
//define('BIND_MODULE','Home');//(跟Home同级目录)  
/*注意:绑定后地址无需加入Admin
例如:
绑定前:http://localhost/test/test.php/Admin 
绑定后:http://localhost/test/test.php
Home目录同理 
*/
//此处因为框架ThinkPHP/Conf目录下convention配置默认模块是Home 默认访问控制器是IndexController  默认方法是index  
//所以http://localhost/test/test.php默认访问Home的Index控制器的index方法
define('BIND_MODULE','Home');
define('APP_PATH','./TP/');//根目录
define('RUNTIME_PATH','./TP/Runtime/');
define('APP_DEBUG', True);
//define("TMPL_PATH",'./Template/');//改变所有模块的模板文件目录 
//例如:原来的./Application/Home/View/User/add.html 变成了./Template/Home/User/add.html 。
//如果同时定义了TMPL_PATH常量和VIEW_PATH设置参数，那么以当前模块的VIEW_PATH参数设置优先。 VIEW_PATH在config里面
require '../../../../../thinkphp_3.2.3_full/ThinkPHP/ThinkPHP.php';




///////////////////////////////////////////////////////////////////////
function logr(&$str)
{
	echo get_variable_name($str)." = ".$str."<br/>";
}
function get_variable_name(&$var, $scope = NULL) {
       if (NULL == $scope) {
          $scope = $GLOBALS;
       }

       $tmp  = $var;

       $var   = "tmp_exists_" . mt_rand();

       $name = array_search($var, $scope, TRUE);

       $var   = $tmp;

       return $name;
}
?>