$(document).ready(function () {
	$('.menu_burger').click(function () {
		$('.menu_burger, .header_menu').toggleClass('active_menu');
		$('body').toggleClass('lock');
	});
	$('.ctext').keyup(function () {
		text = $('.ctext').val().charCodeAt(0);
		$('.char').html(text);
	});
	oper = '';
	inptAr = '.input_area, .input_area_2'
	$('.ac').on('click', function () {
		$(inptAr).val(function () {
			return null;
		});
	});
	$('.sqr').click(function () {
		val = $(inptAr).val();
		$('.input_boof').val(val);
	});
	$('.sqr').on('click', function () {
		$('.oper').val('sqr');
	});
	$('.sqrt').click(function () {
		val = $(inptAr).val();
		$('.input_boof').val(val);
	});
	$('.sqrt').on('click', function () {
		$('.oper').val('sqrt')
	});
	$('.div').click(function () {
		val = $(inptAr).val();
		$('.input_boof').val(val);
	});
	$('.div').on('click', function div(div, oper) {
		$(inptAr).val(null);
		$('.oper').val('/')
	});
	$('.seven').on('click', function () {
		$(inptAr).val(function (i, val) {
			return val + 7;
		});
	});
	$('.eight').on('click', function () {
		$(inptAr).val(function (i, val) {
			return val + 8;
		});
	});
	$('.nine').on('click', function () {
		$(inptAr).val(function (i, val) {
			return val + 9;
		});
	});
	$('.mult').click(function () {
		val = $(inptAr).val();
		$('.input_boof').val(val);
	});
	$('.mult').on('click', function (oper) {
		$(inptAr).val(null);
		$('.oper').val('*')
	});
	$('.four').on('click', function () {
		$(inptAr).val(function (i, val) {
			return val + 4;
		});
	});
	$('.five').on('click', function () {
		$(inptAr).val(function (i, val) {
			return val + 5;
		});
	});
	$('.six').on('click', function () {
		$(inptAr).val(function six(i, val) {
			return val + 6;
		});
	});
	$('.minus').click(function () {
		val = $(inptAr).val();
		$('.input_boof').val(val);
	});
	$('.minus').on('click', function () {
		$(inptAr).val(null);
		$('.oper').val('-')
	});
	$('.one').on('click', function () {
		$(inptAr).val(function (i, val) {
			return val + 1;
		});
	});
	$('.two').on('click', function () {
		$(inptAr).val(function (i, val) {
			return val + 2;
		});
	});
	$('.three').on('click', function () {
		$(inptAr).val(function (i, val) {
			return val + 3;
		});
	});
	$('.plus').click(function () {
		val = $(inptAr).val();
		$('.input_boof').val(val);
	});
	$('.plus').on('click', function () {
		$(inptAr).val(null);
		$('.oper').val('+')
	});
	$('.plus-minus').on('click', function () {
		$(inptAr).val(function (i, val) {
			return -val;
		});
	});
	$('.zero').on('click', function () {
		$(inptAr).val(function (i, val) {
			return val + 0;
		});
	});
	$('.dot').on('click', function () {
		val = $(inptAr).val();
		$(inptAr).val(val + '.');
	});
	$('.sqr').on('click', () => {
		y = Number($('.input_area').val())
		$('.input_area').val(y ** 2)
	})
	$('.sqrt').on('click', () => {
		y = Number($('.input_area').val())
		$('.input_area').val(Math.sqrt(y))
	})
	$('.equal').on('click', () => {
		x = Number($('.input_boof').val());
		y = Number($('.input_area').val());
		oper = $('.oper').val();
		switch (oper) {
			case 'sqr': $('.input_area').val(y ** 2);
				break;
			case 'sqrt': $('.input_area').val(Math.sqrt(y));
				break;
			case '/': $('.input_area').val(x / y);
				break;
			case '*': $('.input_area').val(y * x);
				break;
			case '-': $('.input_area').val(x - y);
				break;
			case '+': $('.input_area').val(y + x);
				break;
			default: $('.input_area').val('Error');
		}
	});
	$('.convert').on('click', function () {
		x = Number($('.input_area_2').val());
		selout = $('.sel-out').val();	//Select output
		selin = $('.sel-in').val();		//Select input	
		if (selin == 'h') {
			if (selout == 'h') {
				$('.input_area_1').val(x);
			} else if (selout == 'm') {
				$('.input_area_1').val(x * 60);
			} else if (selout == 's') {
				$('.input_area_1').val((x * 60) * 60);
			} else $('.input_area_1').val('Ошибка');
		};
		if (selin == 'm') {
			if (selout == 'h') {
				$('.input_area_1').val(x / 60);
			} else if (selout == 'm') {
				$('.input_area_1').val(x);
			} else if (selout == 's') {
				$('.input_area_1').val(x * 60);
			} else $('.input_area_1').val('Ошибка');
		}
		if (selin == 's') {
			if (selout == 'h') {
				$('.input_area_1').val((x / 60) / 60);
			} else if (selout == 'm') {
				$('.input_area_1').val(x / 60);
			} else if (selout == 's') {
				$('.input_area_1').val(x);
			} else $('.input_area_1').val('Ошибка');
		}
	});
	const $pass_dic = "1234567890!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	const $dic_size = $pass_dic.length - 1;
	const $pass_text = $('#pass_text');
	const $copy_mess = $('#copy_mess')
	$('#pass_gen').on('click', () => {

		const $pass_len = Number($('#pass_len').val())
		let $pass = ""
		const data = new Uint32Array(1);
		const date = new Date();
		if ($pass_len == 0) {
			alert("Enter password length")
		} else if ($pass_len > 200) {
			alert("Password length no more than 200")
		} else if ($pass_len < 8) {
			alert("Password length no less than 8")
		} else {
			for (let i = 0; i < $pass_len; i++) {
				self.crypto.getRandomValues(data);
				let time = date.getTime();
				let rand = data[0] * time
				$pass += $pass_dic[rand % $dic_size]
			}
			$pass_text.val($pass)
			$copy_mess.html("")
		}
	})
	$('#pass_copy').on('click', () => {
		const $val = $pass_text.val()
		$pass_text.val($val).select()
		document.execCommand("copy")
		if ($val != "") {
			$copy_mess.html("Copied")
		}
	})
	const bmi_text = $('#bmi_text')
	const bmiArr = ['Underweight', 'Normal', 'Overweight', 'Obesity']
	let bmi_underweight = $('#bmi_underweight')
	let bmi_normal = $('#bmi_normal')
	let bmi_overweight = $('#bmi_overweight')
	let bmi_obesity = $('#bmi_obesity')
	const bmiUnderweight = (bmi) => {
		bmi_underweight.val(bmi);
		bmi_normal.val(0);
		bmi_overweight.val(0);
		bmi_obesity.val(0)
		bmi_text.html(bmiArr[0]);
	}
	const bmiNormal = (bmi) => {
		bmi_underweight.val(0);
		bmi_normal.val(bmi);
		bmi_overweight.val(0);
		bmi_obesity.val(0)
		bmi_text.html(bmiArr[1]);
	}
	const bmiOverweight = (bmi) => {
		bmi_underweight.val(0);
		bmi_normal.val(0);
		bmi_overweight.val(bmi);
		bmi_obesity.val(0)
		bmi_text.html(bmiArr[2]);
	}
	const bmiObesity = (bmi) => {
		bmi_underweight.val(0);
		bmi_normal.val(0);
		bmi_overweight.val(0);
		bmi_obesity.val(bmi)
		bmi_text.html(bmiArr[3]);
	}
	$('#btn_bmi_calc').on('click', () => {
		const height = (Number($('#text_bmi_h').val()) / 100)
		const weight = Number($('#text_bmi_w').val())
		const bmi = weight / Math.pow(height, 2)
		$('#bmi_num').html(bmi.toFixed(2));
		(bmi < 19) ? bmiUnderweight(bmi) : null;
		(bmi >= 19 && bmi <= 25) ? bmiNormal(bmi) : null;
		(bmi >= 25 && bmi <= 30) ? bmiOverweight(bmi) : null;
		(bmi > 30) ? bmiObesity(bmi) : null;
	})
});
