<html>
<body>
    <h1>Students</h1>
    <ul id="main">
        <!-- this is empty-->
    </ul> 
<script>
    function superAppendList(array, id, element){
        for (let i=0;i<array.length;i++){
            let word = array[i]
            var list_item = document.createElement(element)
            list_item.innerHTML = word
            document.getElementById(id).appendChild(list_item)
        }           
    }
    let students = ["Jeff", "Jenny", "Javier", "Joslyn", "Joe", "Jane", "Django"];
    let target_id = "main";
    superAppendList(students, target_id, "li");
</script>   
</body>
</html>