//�ukasz Puzio 1LHP 2024-2025
const Blocks = {
	"Grass": {Up: "Tekstury/Grass.png", Left: "Tekstury/GrassSide.png", Right: "Tekstury/GrassSide.png"},
	"Dirt": {Up:"Tekstury/Dirt.png", Left: "Tekstury/Dirt.png", Right: "Tekstury/Dirt.png"},
	"Cobblestone": {Up:"Tekstury/Cobblestone.png", Left: "Tekstury/Cobblestone.png", Right: "Tekstury/Cobblestone.png"},
	"Black": {Up:"Tekstury/Black.png", Left: "Tekstury/Black.png", Right: "Tekstury/Black.png"},
	
} // Lista Tekstur Blok�w

const BlockTypes = {
	"Full": [["FullUp", "Up"], ["FullLeft", "Left"], ["FullRight", "Right"]],
	"TopSlab": [["TSlabUp", "Up"], ["TSlabLeft", "Left"], ["TSlabRight", "Right"]],
	"BottomSlab": [["BSlabUp", "Up"], ["BSlabLeft", "Left"], ["BSlabRight", "Right"]],
} // Lista modeli blok�w, ka�da para to Styl <div>, oraz id tekstur

var World = [
	{x:2,	y:1,	z:1		,block:"Grass",		type:"BottomSlab"},
	{x:2,	y:0,	z:1		,block:"Dirt", 		type:"Full"},
	{x:2,	y:-1,	z:2		,block:"Cobblestone", 		type:"TopSlab"},
	{x:2,	y:-1,	z:0		,block:"Cobblestone", 		type:"TopSlab"},
] // �wiat, mo�na tutaj postawi� nowe bloczki


// Za ka�dy blok w �wiecie:
for (let i = 0; i < World.length; i++){
	
	// Zdob�d� jego dane
	var Dane = World[i]
	var newindex = (Dane.x * 1) + (Dane.z * (-1)) + (Dane.y * 1)
	var newtop = (Dane.x * 32) + (Dane.z * (-32)) + (Dane.y * (-32))
	var newleft = (Dane.x * 32) + (Dane.z * 32)
	var DaneBloku = Blocks[Dane.block]
	//
	
	// Stw�rz now� baze dla bloka (Nie widoczne)
	document.write('<div style="z-index:' + newindex +'; top:' + newtop + 'px; left:' + newleft + 'px" id="Block">')
	
	// Za ka�dy Styl w bloku
	for (let i2 = 0; i2 < BlockTypes[Dane.type].length; i2++){
		// Zdob�dz jego dane
		var DaneTypu = BlockTypes[Dane.type]
		var Side = DaneTypu[i2]
		var Model = Side[0]
		var Texture = Side[1]
		
		// Dodaj do bazy Potrzebne cz�sci modelu
		document.write('<div style="background-image: url('+ DaneBloku[Texture] +')" id=' + Model +'></div>')
	}
	document.write('</div>')
	
	
	
	
	/* STARY KOD
	document.write('<div style="background-image: url('+ DaneBloku.Up +')" id="Up"></div>')
	document.write('<div style="background-image: url('+ DaneBloku.Left +')" id="Left"></div>')
	document.write('<div style="background-image: url('+ DaneBloku.Right +')" id="Right"></div></div>')
	*/
}
