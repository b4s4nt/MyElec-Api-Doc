<?php

require_once "Classes/PHPExcel.php";


$base = "api/";
$root = "ServiceKnowledgeBase/";
//$structure = $base.$root.$folder;

//Reading Excell File From Path.
$path="test.xlsx";
$reader= PHPExcel_IOFactory::createReaderForFile($path);
$excel_Obj = $reader->load($path);


//Get the last sheet in excel
//$worksheet=$excel_Obj->getActiveSheet();

//Get the first sheet in excel
$worksheet=$excel_Obj->getSheet('0');

$lastRow = $worksheet->getHighestRow();
echo "Last Row : ". $lastRow."\n";

$colomncount = $worksheet->getHighestDataColumn();


$colomncount_number=PHPExcel_Cell::columnIndexFromString($colomncount);
echo "Column per row:" . $colomncount_number."\n";
echo "Column Name :" . PHPExcel_Cell::stringFromColumnIndex(1)."\n";

//$cell =  $worksheet->getCell(PHPExcel_Cell::stringFromColumnIndex(0).'1')->getValue();
//echo "cell : " .$cell;


function deleteStructure($structure, $folder)
{
    unlink($structure . "/" . $folder . "Request.ts");
    unlink($structure . "/" . $folder . "Return.ts");
    rmdir($structure);
}

//for($col =1; $col<=1; $col++){
//    for($row=1;$row<=$lastRow;$row++){
//        $folder =  $worksheet->getCell(PHPExcel_Cell::stringFromColumnIndex($col).$row)->getValue();
//        $structure = $base.$root.$folder;
//        echo $structure."\n";
//
//        deleteStructure($structure, $folder);
//
//        if (!mkdir($structure, 0777, true)) {
//            die('Failed to create directories...');
//        }
//        $myfile = fopen($structure."/".$folder."Request.ts", "w") or die("Unable to open file!");
//        $txt = "interface ". $folder."Request {\n";
//        fwrite($myfile, $txt);
//        $txt = "}\n";
//        fwrite($myfile, $txt);
//        fclose($myfile);
//
//
//        $myfile = fopen($structure."/".$folder."Return.ts", "w") or die("Unable to open file!");
//        $txt = "interface ". $folder."Return {\n";
//        fwrite($myfile, $txt);
//        $txt = "}\n";
//        fwrite($myfile, $txt);
//        fclose($myfile);
//    }
//}

$text = file_get_contents('WebOnline_Services.htm');
echo $text;
?>



