"use strict";
/*10. Resolva o problema abaixo usando Map/Reduce e Objetos JavaScript com a
sintaxe TypeScript.

Processamento Avançado de Dados de Sensores em

uma Rede de Sensores IoT

Você faz parte de uma equipe de engenheiros responsáveis por processar
dados provenientes de uma vasta rede de sensores IoT (Internet of Things) instalados
em uma cidade inteligente. Cada sensor coleta informações sobre vários parâmetros
ambientais, como temperatura, umidade, níveis de poluição e ruído. A cada minuto, os
sensores enviam um conjunto de leituras para serem processados e agregados.
O desafio é criar um sistema de processamento de dados que consolide as
leituras dos sensores em estatísticas úteis, como a média, o máximo e o mínimo para
cada parâmetro ambiental em intervalos de tempo específicos. Além disso, é
necessário aplicar calibrações diferentes para cada sensor, que podem variar a cada
hora. Os dados brutos chegam em forma de um array de objetos, onde cada objeto
contém informações sobre o sensor, o tipo de leitura (temperatura, umidade, etc.), o
valor da leitura e o carimbo de data/hora.

Seu objetivo é criar um programa que utilize as funções map e reduce para
processar esses dados brutos e gerar um relatório detalhado que apresente
estatísticas agregadas para cada parâmetro ambiental, levando em consideração as
calibrações específicas de cada sensor e os intervalos de tempo desejados (por
exemplo, a cada hora).
Por fim, você deve produzir uma estrutura de dados que contenha os seguintes
resultados:

• Média das leituras;
• Valor máximo registrado;
• Valor mínimo registrado. */
