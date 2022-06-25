var sites = [
	["https://web.editey.com/0B85Phnw-Z0B1Si0tT1hBNTZkd28/index.html","Startup Page","Simple Startpage with a tasklist and modifiable search function. One of the first websites I've made. It's currently being hosted on 'www.editey.com'.",["HTML","CSS","JS"],""],
	["https://encasednews.online","EncasedNews","A multi-sourced news tool divided long the US political spectrum. It's currently being hosted on 'www.hostinger.com'",["HTML","CSS","JS","PHP"],""],
	["http://73.147.164.208/portfolio/control","Space Shooters","Although incomplete, this website is a proof of concept for dynamically created server sessions to synchronize a computer and a phone to work as a game console and remote control. To the left is a snapshot of the actual website. The website is hosted on a password protected private server and thus: <span class='cred'><br><b>User:</b> guest<br><b>Pass:</b> jbw90pja2q<br></span>",["HTML","CSS","JS","PHP","Node.js","Linux","Node.js"],"ss.png"],
	["http://73.147.164.208/portfolio/MTT","Image To Text(for memes)","This website is a rudimentary image to text processing tool and organizer. The website is hosted on a password protected private server and thus: <span class='cred'><br><b>User:</b> guest<br><b>Pass:</b> jbw90pja2q<br></span>",["HTML","CSS","JS","PHP","Python","Linux"],"MTT.png"],
	["http://73.147.164.208/portfolio/synch","Synch","A cross-device media synchronizer that dynamically creates 'party' sessions for the groups of devices. The website is hosted on a password protected private server and thus: <span class='cred'><br><b>User:</b> guest<br><b>Pass:</b> jbw90pja2q<br></span>",["HTML","CSS","JS","PHP","Linux"],"synch.png"],
	["http://73.147.164.208/portfolio/stocky","Stocky","A quick information sharing website that creates dynamic sessions of up to five devices that can chat, share a clipboard and share some files in between each other. The website is hosted on a password protected private server and thus: <span class='cred'><br><b>User:</b> guest<br><b>Pass:</b> jbw90pja2q<br></span>",["HTML","CSS","JS","PHP","Node.js"],"stocky.png"]
];
var currentSite = "resume";
var hHeight = 0;
function mobileCheck() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}
function loadSite(site)
{
	currentSite = site;
	document.getElementById("siteInfo").innerHTML = "";
	document.getElementById("siteFrame").style["opacity"] = "0";
	document.getElementById("openBtn").disabled = false;
	if (site.includes("https://"))
		document.getElementById("siteFrame").src=site;
	else if (site.includes("http://"))
	{
		sites.forEach(siteArr => {
			if (siteArr[0] == site)
			{
				document.getElementById("siteFrame").src="res/"+siteArr[4];	 
			}
		});
	}
	else if (site == "resume")
	{
		document.getElementById("siteFrame").src="./Christian-Lawson-Resume.html";
		document.getElementById("openBtn").disabled = true;
		document.getElementById("siteInfo").innerHTML = "<span class='siteTitle'>Resume</span>Above is a selection of projects I've made that include languages such as HTML, Javascript, PHP, CSS, Node.js, and even Python.";
		return;
	}
	sites.forEach(siteArr => {
		if (siteArr[0] == site)
		{
			var title = document.createElement("span");
			title.setAttribute("class",(mobileCheck()) ? "siteTitleMobile":"siteTitle");
			title.setAttribute("id","siteTitle");
			title.innerHTML = siteArr[1];
			document.getElementById("siteInfo").appendChild(title);
			var desc = document.createElement("span");
			desc.setAttribute("class","siteDesc");
			desc.innerHTML = siteArr[2];
			document.getElementById("siteInfo").appendChild(desc);
			var languages = document.createElement("ul");
			var label = document.createElement("span");
			label.innerHTML = "Included Languages:";
			languages.appendChild(label);
			languages.setAttribute("class","languages");
			siteArr[3].forEach(lang =>{
				var tempLi = document.createElement("li");
				tempLi.innerHTML = lang;
				languages.appendChild(tempLi);
			});
			document.getElementById("siteInfo").appendChild(languages);
		}
	});
}

function switchPage(input)
{
	window.open(currentSite,'_blank');
	document.getElementById("openBtn").value = ((currentSite == "resume") ? "Open":"Download");
	if (currentSite == "resume")
		document.getElementById("download").click();
}

function toggleHeader()
{
	if (document.getElementById("hideHeader").value == "▲")
	{
		document.getElementById("hideHeader").value = "▼";
		document.getElementById("hideHeader").style["top"] = 0+"px";
		document.getElementById("headerDiv").style["top"] = "-"+hHeight+"px";
	}
	else
	{
		document.getElementById("hideHeader").value = "▲";
		document.getElementById("hideHeader").style["top"] = hHeight+"px";
		document.getElementById("headerDiv").style["top"] = 0+"px";
	}
}
function load()
{
	if (mobileCheck())
	{
		var mobileIDs = ["siteFrame","siteInfo"];
		mobileIDs.forEach(ID => {
			document.getElementById(ID).setAttribute("class",ID+"Mobile");
		});
		document.getElementById("hideHeader").style["display"] = "inline";
	}
	var siteSelect = document.getElementById("siteSelect");
	for (let i=0;i<sites.length;i++)
	{
		var tempOption = document.createElement("option");
		tempOption.setAttribute("value",sites[i][0]);
		//tempOption.setAttribute("onselect","loadSite(this.value)");
		tempOption.innerHTML = sites[i][1];
		siteSelect.appendChild(tempOption);
	}
	hHeight = document.getElementById("headerDiv").offsetHeight;
	document.getElementById("homeDiv").style["height"] = "calc(100vh - "+hHeight+"px)";
	document.getElementById("hideHeader").style["top"] = hHeight+"px";
}
