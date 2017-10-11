/**
 * Created by zhuerwei on 2017/9/25.
 */
var type = 2;
var $doms = document.getElementsByClassName('phui-object-item-list-view')[type].getElementsByClassName('phui-object-item');
var $as = [];
for(var i=0,len = $doms.length;i<len;i++){
    var $lia = $doms[i].getElementsByTagName('a');
    $lia[0].setAttribute('target','_blank');
    $as.push($lia[0]);
}
