<?php
// пример использования
$blocks['call_us_header_f'] = "Шапка";
$blocks['leave_msg_f'] = "Специальное предложение";
$blocks['order1_f'] = "Аэрофото";
$blocks['order2_f'] = "Аэровидео";
$blocks['order3_f'] = "3D-панорама";
$blocks['order4_f'] = "3D-тур";
$blocks['ask_quest'] = "Задать вопрос";
$blocks['ask_manager'] = "Спросить у менеджера";

$blocks['header_free_move'] = "Запись на бесплатную съемку";


require_once "SendMailSmtpClass.php"; // подключаем класс
if($_POST){ 
$text_mail = $_POST['name'].' - '.$_POST['phone'].' - '.date('d-m-y H:m').' - '.$blocks[$_POST['id']];
	if(isset($_POST['message']) && !empty($_POST['message'])) $text_mail.='\n\p Вопрос клиента: '.$_POST['message'];
	if(isset($_POST['ask_us']) && !empty($_POST['ask_us'])) $text_mail.='\n\p Вопрос клиента: '.$_POST['ask_us'];

$mailSMTP = new SendMailSmtpClass('vsem.naves@yandex.ru', 'xc8QPXBLb3q8OAQxG', 'ssl://smtp.yandex.ru', 'Company', 465);
// $mailSMTP = new SendMailSmtpClass('логин', 'пароль', 'хост', 'имя отправителя');
  
// заголовок письма
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
$headers .= "From: vsem.naves <vsem.naves@yandex.ru>\r\n"; // от кого письмо
$result =  $mailSMTP->send('mnikolayw@gmail.com', 'Заявка с Всем навесы', $text_mail, $headers); // отправляем письмо
// $result =  $mailSMTP->send('Кому письмо', 'Тема письма', 'Текст письма', 'Заголовки письма');
if($result === true){
    echo "Письмо успешно отправлено";
}else{
    echo "Письмо не отправлено. Ошибка: " . $result;
	}
}else{
	echo "No data";
}
?>
