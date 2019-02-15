--Criacao do banco de dados
CREATE DATABASE pdw20182lbgs();

--Troca do banco para o criado
USE pdw20182lbgs;

--Criacao das tabelas
CREATE TABLE IPS(
	id_ip	INTEGER NOT NULL,
	ip	VARCHAR(32) NOT NULL,
	netmask	VARCHAR(32),
	gateway	VARCHAR (32),
        PRIMARY KEY (id_ip)
);

CREATE TABLE TimeStamps (
	id_tmstp	INTEGER NOT NULL,
	timestmps	DATE NOT NULL
        PRIMARY KEY (id_tmp_stmp),
);

CREATE TABLE Hostscfg (
	id_hcfg	INTEGER NOT NULL AUTO_INCREMENT,
	hostname	VARCHAR(20) NOT NULL,
	domain_name	VARCHAR(20) NOT NULL,
	nic_name VARCHAR(10),
	id_ip INTEGER,
	id_tmp_stmp INTEGER,
        PRIMARY KEY(id_hcfg)
);

CREATE TABLE pvlvm(
	id_pvlvm INTEGER NOT NULL AUTO_INCREMENT,
	Nome_PV VARCHAR(20),
        Nome_VG VARCHAR(20),
        Tamanho_PV VARCHAR(20),
        Alocavel VARCHAR(20),
        Tamanho_PE VARCHAR(20),
        PE_Total VARCHAR(20),
        PE_Livre VARCHAR(20),
        PE_Alocado VARCHAR(20),
        PV_UUID VARCHAR(20),
        PRIMARY KEY (id_pvlvm)
);
CREATE TABLE gvlvm(
	id_gvlvm INTEGER NOT NULL AUTO_INCREMENT,
	Caminho_VL VARCHAR(10)
        Nome_VL VARCHAR(10),
        Nome_GVVARCHAR(10),
        UUID_do_VL VARCHAR(10),
        Acesso_ao_VL   VARCHAR(10),
        Timestamp_do_VL VARCHAR(10),
        Status_do_VL   VARCHAR(10),
        Abertura_do_VL VARCHAR(10),
        Tamanho_do_VL  VARCHAR(10),
        LE_Atual   VARCHAR(10),
        Segmentos  VARCHAR(10), 
        Alocação   VARCHAR(10), 
        Read_ahead_sec VARCHAR(10),
        Block_device   VARCHAR(10),
        PRIMARY KEY(id_gvlvm) 
);
CREATE TABLE lvlvm(
	id_lvlvm INTEGER NOT NULL AUTO_INCREMENT,
	Nome_GV VARCHAR(10), 
        ID_do_Sistema   VARCHAR(10),
        Formato VARCHAR(10),
        Area_de_Metadata        VARCHAR(10),
        Sequencia_de_Metadata   VARCHAR(10),
        Acesso_da_GV    VARCHAR(10),
        Status_da_GV    VARCHAR(10),
        LV_Max  VARCHAR(10),
        LV_Atual        VARCHAR(10),
        LV_Aberto       VARCHAR(10),
        PV_Max  VARCHAR(10),
        PV_Atual        VARCHAR(10),
        PV_Ativo        VARCHAR(10),
        Tamanho_GV      VARCHAR(10),
        Tamanho_PE      VARCHAR(10),
        PE_Total        VARCHAR(10),
        PE_Alocado      VARCHAR(10),
        PE_Livre        VARCHAR(10),
        UUID_do_GV      VARCHAR(10), 
        PRIMARY KEY(id_lvlvm)
);

--

ALTER TABLE Hostscfg ADD CONSTRAINT fk_IP FOREIGN KEY (id_ip) REFERENCES Ips(id_ip);
ALTER TABLE Hostscfg ADD CONSTRAINT fk_IP FOREIGN KEY (id_tmp_stmp) REFERENCES Ips(id_tmstp);
