
// var x =[{'name':"Anshul Kurkanji",'imagelinked':'anshul.jpeg','posi' : 'Head of Publicity and logistics'},
// 		{'name':"Harshit Ranghuvanshi",'imagelinked':'harshit.jpeg','posi' : 'Vice Chairperson'},
// 		{'name':"Mukul Baheti",'imagelinked':'mukul.jpeg','posi' : 'Chairperson'},
// 		{'name':"Sidhant Tibrewal",'imagelinked':'sidhant.jpeg','posi' : 'Head of Design and Operations'},
// 		{'name':"Gaurangi Gupta",'imagelinked':'gaurangi.jpeg','posi' : 'Head of Design'},
// 		{'name':"Vanshika Kumar",'imagelinked':'vanshika.jpeg','posi' : 'Head of Public Relations'},
// 		{'name':"Noopur Vaishnav",'imagelinked':'noopur.jpeg','posi' : 'Head of Human Relations'},
// 		{'name':"Shreyansh Murarka",'imagelinked':'shreyansh.jpeg','posi' : 'Technical Head'},
// 		{'name':"Shounak Dey",'imagelinked':'shounak.jpeg','posi' : 'Technical Head'},
// 		{'name':"Pranav Tharoor",'imagelinked':'pranav.jpeg','posi' : 'Web Head'},
// 		{'name':"Aritra Basu",'imagelinked':'aritra.jpeg','posi' : 'Head of Sponsorship and Development'},
// 		{'name':"Ekam Walia",'imagelinked':'ekam.jpeg','posi' : 'Treasurer'},
// 		{'name':"Nishchay Parashar","imagelinked" : 'nishchay.jpeg','posi':'General Secretary'}];



function droper(){
	let menu = document.querySelector('#menu');
	if (menu.style.display === 'none'){
		menu.style.display = 'block';
	}
	else{
		menu.style.display = 'none';	
	}
}
document.addEventListener('DOMContentLoaded',function(){
	let startyear = 2008;
	let currentyear = 2018;

	for(let i = startyear;i<=currentyear;i++){
		let inc = i + 1;
		let y2 = inc.toString();
		y2 = y2.substring(2);
		let yeardiv = document.createElement('div');
		yeardiv.className = "dropbox";
		let yeartext = document.createTextNode(i + '-' + y2);
		yeardiv.appendChild(yeartext);
		let yearlink = document.createElement('a');
		if(i!=pageyear)
			yearlink.href = "index" + i + ".html";
		yearlink.appendChild(yeardiv);
		let dropref = document.getElementById("menu");
		dropref.appendChild(yearlink);
	}
	for (let i = 0;i<x.length;i++){
		let boardname = x[i].name;
		let imagelink = x[i].imagelinked;
		let boardposition = x[i].posi;
					
		let imgnode = document.createElement('img');
		imgnode.src = '../resources/' + imagelink;
		let namespan = document.createElement('span');
		namespan.className =  "named";
		let posspan = document.createElement('span');
		posspan.className = "positiond";
		let namenode = document.createTextNode(boardname);
		let posnode = document.createTextNode(boardposition);
		let smallnode = document.createElement('small');
		let br1 = document.createElement('br');
		let br2 = document.createElement('br');
		smallnode.appendChild(posnode);
		posspan.appendChild(smallnode);
		namespan.appendChild(namenode);
		box = document.getElementById('people');
		let personnode = document.createElement('div');
		personnode.className = "person";
		personnode.appendChild(imgnode);
		personnode.appendChild(br1);
		personnode.appendChild(namespan);
		personnode.appendChild(br2);
		personnode.appendChild(posspan);
		box.appendChild(personnode);
		imgnode.onclick = function(){
			for(let i = 0;i<x.length;i++){
				let cele = document.getElementById(x[i].name);
				cele.style.display = 'none';
			}
			console.log(boardname);
			let ele = document.getElementById(boardname);
			ele.style.display = "block";
			document.getElementById("people").style.filter = "blur(15px)";
		}
		

		let cimgnode = document.createElement('img');
		cimgnode.src = '../resources/' + imagelink;
		let cnamespan = document.createElement('span');
		cnamespan.className = "named";
		let cposspan = document.createElement('span');
		cposspan.className = "positiond";
		let cnamenode = document.createTextNode(boardname);
		let cname = document.createTextNode(boardposition);
		let br3 = document.createElement('br');
		cnamespan.appendChild(cnamenode);
		cposspan.appendChild(cname);
		let cardnode = document.createElement('div');
		cardnode.className = "card";
		let clinkdiv = document.createElement('div');
		clinkdiv.className = "links";
		let cfb = document.createElement('img');
		cfb.src = '../resources/fb.png';
		clinkdiv.appendChild(cfb);
		let cinsta = document.createElement('img');
		cinsta.src = '../resources/instagram.png';
		clinkdiv.appendChild(cinsta);
		let cgit = document.createElement('img');
		cgit.src = '../resources/GitHub.png';
		clinkdiv.appendChild(cgit);		
		cardnode.appendChild(cimgnode);
		cardnode.appendChild(cnamespan);
		cardnode.appendChild(cposspan);
		cardnode.appendChild(clinkdiv);
		cardnode.id = boardname;
		cimgnode.onclick = function(){
			let ele = document.getElementById(boardname);
			ele.style.display = 'none';
			document.getElementById("people").style.filter = "none";
		}
		document.body.appendChild(cardnode);
	}
})
