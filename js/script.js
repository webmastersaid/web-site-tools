$(() => {
	// ASCII
	$('.ctext').on('keyup', () => {
		text = $('.ctext').val().charCodeAt(0);
		$('.char').html(text);
	});
	// Calculator
	oper = '';
	// calculator and time coverter input area
	$inputArea = $('.input_area, .input_area_2');
	$inputBoof = $('.input_boof');
	$inputOper = $('.input_oper');
	$('.one').on('click', () => {
		$inputArea.val((i, val) => {
			return val + 1;
		});
	});
	$('.two').on('click', () => {
		$inputArea.val((i, val) => {
			return val + 2;
		});
	});
	$('.three').on('click', () => {
		$inputArea.val((i, val) => {
			return val + 3;
		});
	});
	$('.four').on('click', () => {
		$inputArea.val((i, val) => {
			return val + 4;
		});
	});
	$('.five').on('click', () => {
		$inputArea.val((i, val) => {
			return val + 5;
		});
	});
	$('.six').on('click', () => {
		$inputArea.val((i, val) => {
			return val + 6;
		});
	});
	$('.seven').on('click', () => {
		$inputArea.val((i, val) => {
			return val + 7;
		});
	});
	$('.eight').on('click', () => {
		$inputArea.val((i, val) => {
			return val + 8;
		});
	});
	$('.nine').on('click', () => {
		$inputArea.val((i, val) => {
			return val + 9;
		});
	});
	$('.zero').on('click', () => {
		$inputArea.val((i, val) => {
			return val + 0;
		});
	});
	$('.div').on('click', () => {
		val = $inputArea.val();
		$inputBoof.val(val);
	});
	$('.div').on('click', () => {
		$inputArea.val(null);
		$inputOper.val('/')
	});
	$('.mult').on('click', () => {
		val = $inputArea.val();
		$inputBoof.val(val);
	});
	$('.mult').on('click', () => {
		$inputArea.val(null);
		$inputOper.val('*')
	});
	$('.minus').on('click', () => {
		val = $inputArea.val();
		$inputBoof.val(val);
	});
	$('.minus').on('click', () => {
		$inputArea.val(null);
		$inputOper.val('-')
	});
	$('.plus').on('click', () => {
		val = $inputArea.val();
		$inputBoof.val(val);
	});
	$('.plus').on('click', () => {
		$inputArea.val(null);
		$inputOper.val('+')
	});
	$('.plus-minus').on('click', () => {
		$inputArea.val((i, val) => {
			return -val;
		});
	});
	$('.sqr').click(() => {
		val = $inputArea.val();
		$inputBoof.val(val);
	});
	$('.sqr').on('click', () => {
		$inputOper.val('sqr');
	});
	$('.sqr').on('click', () => {
		y = Number($inputArea.val())
		$inputArea.val(y ** 2)
	})
	$('.sqrt').click(() => {
		val = $inputArea.val();
		$inputBoof.val(val);
	});
	$('.sqrt').on('click', () => {
		$inputOper.val('sqrt')
	});
	$('.sqrt').on('click', () => {
		y = Number($inputArea.val())
		$inputArea.val(Math.sqrt(y))
	})
	$('.dot').on('click', () => {
		val = $inputArea.val();
		dot_state = val.includes('.');
		if (!dot_state) {
			if (val == '') {
				$inputArea.val('0' + '.');
			} else {
				$inputArea.val(val + '.');
			}
		}

	});
	$('.equal').on('click', () => {
		x = Number($inputBoof.val());
		y = Number($inputArea.val());
		oper = $inputOper.val();
		switch (oper) {
			case 'sqr':
				$inputArea.val(y ** 2);
				break;
			case 'sqrt':
				$inputArea.val(Math.sqrt(y));
				break;
			case '/':
				$inputArea.val(x / y);
				break;
			case '*':
				$inputArea.val(x * y);
				break;
			case '-':
				$inputArea.val(x - y);
				break;
			case '+':
				$inputArea.val(x + y);
				break;
			default:
				$inputArea.val(y);
		}
	});
	$('.ac').on('click', () => {
		$inputArea.val(() => {
			$inputArea.val('');
			$inputBoof.val('');
			$inputOper.val('');
			oper = '';
			x = 0;
			y = 0;
			return '';
		});
	});
	// Time Converter
	$inputArea1 = $('.input_area_1');
	$('.convert').on('click', () => {
		x = Number($inputArea.val());
		selout = $('.sel-out').val();
		selin = $('.sel-in').val();
		if (selin == 'h') {
			if (selout == 'h') {
				$inputArea1.val(x);
			} else if (selout == 'm') {
				$inputArea1.val(x * 60);
			} else if (selout == 's') {
				$inputArea1.val((x * 60) * 60);
			} else $inputArea1.val('Error');
		};
		if (selin == 'm') {
			if (selout == 'h') {
				$inputArea1.val(x / 60);
			} else if (selout == 'm') {
				$inputArea1.val(x);
			} else if (selout == 's') {
				$inputArea1.val(x * 60);
			} else $inputArea1.val('Error');
		}
		if (selin == 's') {
			if (selout == 'h') {
				$inputArea1.val((x / 60) / 60);
			} else if (selout == 'm') {
				$inputArea1.val(x / 60);
			} else if (selout == 's') {
				$inputArea1.val(x);
			} else $inputArea1.val('Error');
		}
	});
	// Password Generator
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
	// BMI
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
