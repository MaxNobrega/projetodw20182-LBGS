const tabela_vfisico = document.querySelector("#disktable tbody");


//Coletando dados do json
let abc = 'abc'
console.log(abc)
iniciojs();

function iniciojs(){
    fetch("json/harddisks.json")
          .then(res => res.json())
          .then(json => Disks_json(json))

    function Disks_json(json){
      for(const cada_json of json) {

          const disks_html = `
          <tr>
            <td>${cada_json.particao}</td> 
            <td>${cada_json.montagem}</td> 
            <td>${cada_json.total}</td> 
            <td>${cada_json.usado}</td> 
            <td>${cada_json.livre}</td> 
            <td>${cada_json.porcentagem}</td>
          </tr>
          `
              tabela_vfisico.insertAdjacentHTML("beforeend",disks_html)
          }
      }
}
