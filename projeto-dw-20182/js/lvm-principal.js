const tabela_vfisico = document.querySelector("#lvmtvolfisico tbody");
const tabela_grupo_vol = document.querySelector("#lvmtgrpvolume tbody");
const tabela_vlogico = document.querySelector("#lvmtvollogico tbody");

const particoes_novo_volume_fisico = document.querySelector("#novolvmvolfisico");
const botao_novo_volume_fisico = document.querySelector("#botaonovopv");

const particoes_remover_volume_fisico = document.querySelector("#remlvmvolfisico");
const botao_remover_volume_fisico = document.querySelector("#botaoremovepv");

const lista_novo_grupo_volume = document.querySelector("#novolvmgv");
const nome_novo_grupo_volume = document.querySelector("#entradanomenovogv");
const botao_novo_grupo_volume = document.querySelector("#botaonovogv");

const lista_remove_grupo_volume = document.querySelector("#removelvmgv");
const botao_remove_grupo_volume = document.querySelector("#botaoremovegv");

const lista_novo_volume_logico = document.querySelector("#novolvmvl");
const nome_novo_volume_logico = document.querySelector("#entradanomenovogv");
const botao_novo_volume_logico = document.querySelector("#botaonovovl");

const lista_remover_volume_logico = document.querySelector("#removelvmvl");
const botao_remover_volume_logico = document.querySelector("#botaoremovevl");

//Coletando dados do json
let abc = 'abc'
console.log(abc)
iniciojs();

function iniciojs(){
    fetch("json/vol_fisico.json")
          .then(res => res.json())
          .then(json => VolFisico_json(json))

    function VolFisico_json(json){
      for(const cada_json of json) {

          const volfisico_html = `
          <tr>
            <td>${cada_json.Nome_PV}</td> 
            <td>${cada_json.Nome_VG}</td> 
            <td>${cada_json.Tamanho_PV}</td> 
            <td>${cada_json.Alocavel}</td> 
            <td>${cada_json.Tamanho_PE}</td> 
            <td>${cada_json.PE_Total}</td> 
            <td>${cada_json.PE_Livre}</td> 
            <td>${cada_json.PE_Alocado}</td> 
            <td>${cada_json.PV_UUID}</td> 
          </tr>
          `
              tabela_vfisico.insertAdjacentHTML("beforeend",volfisico_html)
          }
      }

      fetch('json/vol_fisico.js')
          .then(res => res.json())
          .then(json => VolFisico_json(json))

    function VolFisico_json(json){
      for(const cada_json of json) {

          const volfisico_html = `
          <tr>
            <td>${cada_json.Nome_PV}</td> 
            <td>${cada_json.Nome_VG}</td> 
            <td>${cada_json.Tamanho_PV}</td> 
            <td>${cada_json.Alocavel}</td> 
            <td>${cada_json.Tamanho_PE}</td> 
            <td>${cada_json.PE_Total}</td> 
            <td>${cada_json.PE_Livre}</td> 
            <td>${cada_json.PE_Alocado}</td> 
            <td>${cada_json.PV_UUID}</td> 
          </tr>
          `
              tabela_vfisico.insertAdjacentHTML("beforeend",volfisico_html)
          }
      }

      fetch('json/vol_logico.json')
          .then(res => res.json())
          .then(json => VolLogico_json(json))

    function VolLogico_json(json){
      for(const cada_json of json) {

          const vollogico_html = `
          <tr>
            <td>${cada_json.Caminho_VL }</td>
            <td>${cada_json.Nome_VL}</td>
            <td>${cada_json.Nome_GV}</td>
            <td>${cada_json.UUID_do_VL }</td>
            <td>${cada_json.Acesso_ao_VL   }</td>
            <td>${cada_json.Timestamp_do_VL}</td>
            <td>${cada_json.Status_do_VL   }</td>
            <td>${cada_json.Abertura_do_VL }</td>
            <td>${cada_json.Tamanho_do_VL  }</td>
            <td>${cada_json.LE_Atual   }</td>
            <td>${cada_json.Segmentos  }</td> 
            <td>${cada_json.Alocação   }</td> 
            <td>${cada_json.Read_ahead_sec}</td>
            <td>${cada_json.Block_device   }</td> 
          </tr>
          `
              tabela_vlogico.insertAdjacentHTML("beforeend",vollogico_html)
          }
    }

    fetch('json/grupo_volume.json')
    .then(res => res.json())
    .then(json => grpVolume_json(json))

    function grpVolume_json(json){
    for(const cada_json of json) {

    const grpvolume_html = `
    <tr>
        <td>${cada_json.Nome_GV}</td> 
        <td>${cada_json.ID_do_Sistema}</td>
        <td>${cada_json.Formato}</td>
        <td>${cada_json.Area_de_Metadata}</td>
        <td>${cada_json.Sequencia_de_Metadata}</td>
        <td>${cada_json.Acesso_da_GV}</td>
        <td>${cada_json.Status_da_GV}</td>
        <td>${cada_json.LV_Máx}</td>
        <td>${cada_json.LV_Atual}</td>
        <td>${cada_json.LV_Aberto}</td>
        <td>${cada_json.PV_Máx}</td>
        <td>${cada_json.PV_Atual}</td>
        <td>${cada_json.PV_Ativo}</td>
        <td>${cada_json.Tamanho_GV}</td>
        <td>${cada_json.Tamanho_PE}</td>
        <td>${cada_json.PE_Total}</td>
        <td>${cada_json.PE_Alocado}</td>
        <td>${cada_json.PE_Livre}</td>
        <td>${cada_json.UUID_do_GV}</td> 
    </tr>
    `
        tabela_vlogico.insertAdjacentHTML("beforeend",grpvolume_html)
    }
}
}


function enviarNovoVolumeFisico(){

}

function enviarRemoverVolumeFisico(){
    
}

function enviarNovoGrupoVolume(){
    
}

function enviarRemoverGrupoVolume(){
    
}

function enviarNovoVolumeLogico(){
    
}

function enviarRemoverVolumeLogico(){
    
}