/**
	tdg.1.js
**/
function checkandsubmit(){
	checkandgo();
	document.getElementById('tdgaction').submit;
}
function checkandgo(){
	checkinput('mortP2',document.getElementById('mortP2').value,0.0,20,10.8,10.8);
	checkinput('mortP0',document.getElementById('mortP0').value,0.0,0.01,0.000018);
	checkinput('mortP1',document.getElementById('mortP1').value,0.0,0.01,0.00515);
	showmort();
	checkinput('depthP0',document.getElementById('depthP0').value,0.0,100,12);
	checkinput('depthP1',document.getElementById('depthP1').value,document.getElementById('depthP0').value,150,36);
	showdepth();
}
function checkinput(id,val,minval,maxval,defaultval){
	if(/^[0123456789]*.?[0123456789]*$/.test(val) & /!\D/.test(val)){
	
	}else{
		document.getElementById(id).value = val = defaultval;
	}
	if(val > maxval | val < minval){
		document.getElementById(id).value = defaultval;
	}
}
function showmort(){
	var x0 = 0;
	var x1 = document.getElementById('mortP2').value;
	var r1 = document.getElementById('mortP0').value;
	var r2 = document.getElementById('mortP1').value;
	var x2 = 40;
	var y1 = x0 + ( r1 * x1 );
	var y2 = y1 + ( r2 * ( x2 - x1 ) );
	var trace1 = {
	  x: [x0, x1, x2],
	  y: [0, y1, y2], 
	  type: 'scatter',
	  mode: 'lines'
	};
	var data = [trace1];
	var layout = { title: "Mortality",xaxis: {title:'TDG level > 100%'}, yaxis: { title: 'Mortality rate (per day)'}}
	Plotly.newPlot('testplot', data, layout);
};
function showdepth(){
	var yy0 = 0;
	var yy1 = - document.getElementById('depthP0').value;
	var yy2 = - document.getElementById('depthP1').value;
	var xx0 = 0;
	var xx1 = - 0.5 / yy1;
	var xx2 = 0;
	var trace2 = {
	  x: [xx0, xx1, xx2], 
	  y: [yy0, yy1, yy2], 
	  type: 'scatter',
	  mode: 'lines'
	};
	var data2 = [trace2];
	var layout2 = { title: "Fish distribution with depth",xaxis: {title:'Relative Density'}, yaxis: { title: 'Depth in feet'}}
	Plotly.newPlot('testplot2', data2,layout2);
};

function loadplots(){
	showmort();
	showdepth();
};
function resetparams(){
	var what = document.getElementById('species').value;
	if(what == 'Steelhead'){
		document.getElementById('mortP2').value = 12.7;
		document.getElementById('mortP0').value = 0.000594;
		document.getElementById('mortP1').value = 0.004820;
	}
	if(what == 'Chinook_1'){
		document.getElementById('mortP2').value = 10.9;
		document.getElementById('mortP0').value = 0.000021;
		document.getElementById('mortP1').value = 0.005150;
	}
}
