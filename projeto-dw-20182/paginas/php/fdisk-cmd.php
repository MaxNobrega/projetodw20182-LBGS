<?php
//Variables

generate_vectors();

//Functions
function generate_vectors (){

    $num_ocasions = shell_exec("df -h | grep '^/' | awk 'END{print NR}'");
    $partition_vec = explode("\n", shell_exec("df -h | grep '^/' | awk '{print $1}'") );
    $mount_points_vec = explode("\n", shell_exec("df -h | grep '^/' | awk '{print $6}'") );
    $total_size_vec = explode("\n", shell_exec("df -h | grep '^/' | awk '{print $2}'") );
    $used_size_vec = explode("\n", shell_exec("df -h | grep '^/' | awk '{print $3}'") );
    $free_size_vec = explode("\n", shell_exec("df -h | grep '^/' | awk '{print $4}'") );
    $usage_percentage_vec = explode("\n",shell_exec("df -h | grep '^/' | awk '{print $5}'") );

    $archive = fopen('../json/harddiskss.json', 'w');

for($i = 0; $i < $num_ocasions; $i++){
    $json=json_encode([
        "particao" => $partition_vec[$i], 
        "montagem" => $mount_points_vec[$i],    
        "total" => $total_size_vec[$i],    
        "usado"=> $used_size_vec[$i],    
        "livre"=> $free_size_vec[$i], 
        "porcentagem" => $usage_percentage_vec[$i] 
        ]);   
    fwrite($archive, $json);
    }

    fclose($archive);
}
?>
