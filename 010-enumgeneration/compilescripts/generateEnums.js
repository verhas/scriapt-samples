importPackage(java.io);
importPackage(java.lang);


System.out.println("This is the enum generator");

// Generate the directory

var directoryArray = [ "target","generated-sources","annotations","com","javax0","scriapt","sample" ];
var enumClassFile = "DomainEnum.java";
var directory = "";
for( var dir in directoryArray ){
	directory += directoryArray[dir] +"/";
	var outputDirectory = new File(directory);
	outputDirectory.mkdir();
}

// Create the output file and the writer to it

var outputFile = new File( directory + enumClassFile );
var outputWriter = new PrintWriter(outputFile);

// String for which we need enumerations

var constantStrings = [
		"FIX.4.2", "9", "35", "49=PHLX", "56=PERS",
		"20071123-05:30:00.000", "ATOMNOCCC9990900",
		"PHLX EQUITY TESTING",
		"DEUT", "DE","FF","DK","KK"
		];

// convert a string to something that can be used as identifier
function createId(str){

	var converted;
	// prepend A if the string starts with non alpha character	
	if( ! /^[A-Za-z]/.test(str) ){
		converted = "A";
	}else{
		converted = "";
	}

	for( var i = 0 ; i < str.length ; i ++ ){
		var chr = str.substr(i,1);
		if(  ! /^[\w\d]/.test(chr) ){
			chr = "_";
		}
		converted += chr;
	}
	return converted;
}

// Generate the enumeration class

outputWriter.write("package com.javax0.scriapt.sample;\n" +
		"public enum DomainEnum {\n");
for( var i in constantStrings ){
	var str = constantStrings[i];
	outputWriter.write( createId(str) +"(\""+str+"\"),\n");
}
		
outputWriter.write(";\nfinal String name;\nDomainEnum(final String s){\nname = s;\n}\n");		
outputWriter.write("}\n");

// Close the generated file

outputWriter.close();
