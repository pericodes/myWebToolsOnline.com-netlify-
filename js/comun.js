		let ajax = new XMLHttpRequest();
		let header = document.getElementById('import-header');
		ajax.open("GET", "./imports/header.html", true);
		ajax.send();
		ajax.onreadystatechange = function () {
			if(this.readyState == 4 && this.status == 200) {
				header.insertAdjacentHTML("afterend", this.responseText); 
				header.remove();
				let aside = document.getElementById('import-aside');
				ajax.open("GET", "./imports/aside.html", true);
				ajax.send();
				ajax.onreadystatechange = function () {
					if(this.readyState == 4 && this.status == 200) {
						aside.insertAdjacentHTML("afterend", this.responseText); 
						aside.remove();
						let footer = document.getElementById('import-footer');
						ajax.open("GET", "./imports/footer.html", true);
						ajax.send();
						ajax.onreadystatechange = function () {
							if(this.readyState == 4 && this.status == 200) {
								footer.insertAdjacentHTML("afterend", this.responseText); 
								footer.remove();
							}
						};
					}
				};
			}
		};