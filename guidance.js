/* Orientações preliminares: confirmar técnica e regulagem com profissional habilitado. */
const EXERCISE_GUIDES=[
[/puxador articulado pegada supinada/i,['Ajuste banco e apoios para estabilizar o tronco.','Segure com palmas voltadas para você e mantenha os ombros afastados das orelhas.','Puxe em direção à parte superior do peito, levando os cotovelos para baixo; retorne de modo controlado.','Evite jogar o tronco para trás, puxar atrás da nuca ou usar impulso.']],
[/tríceps na polia com corda/i,['Ajuste a polia alta e escolha uma carga que permita controle.','Mantenha os cotovelos próximos ao corpo e punhos neutros.','Estenda os cotovelos sem balançar o tronco; retorne lentamente.','Evite abrir excessivamente os cotovelos ou projetar os ombros.']],
[/puxada articulada de ação conjunta/i,['Regule o banco e o apoio conforme a máquina.','Mantenha o peito apoiado quando houver suporte e os pés firmes.','Puxe as alças com movimento coordenado e retorne sem soltar o peso.','Evite elevar os ombros, arquear excessivamente a lombar ou dar trancos.']],
[/remada baixa supinada/i,['Ajuste o assento e mantenha os pés apoiados.','Use pegada supinada e mantenha a coluna neutra.','Traga as mãos em direção ao tronco, aproximando as escápulas sem perder a postura.','Evite arredondar as costas ou movimentar o corpo para ganhar impulso.']],
[/remada máquina pegada neutra/i,['Ajuste assento e apoio peitoral, quando disponíveis.','Segure as manoplas com palmas voltadas uma para a outra.','Puxe os cotovelos para trás de modo controlado e retorne sem deixar o peso despencar.','Evite elevar os ombros e perder contato com o apoio.']],
[/tríceps scooth pegada neutra/i,['Confira o modelo da máquina e ajuste assento e apoio dos braços.','Mantenha os braços alinhados aos apoios e punhos neutros.','Estenda os cotovelos dentro de uma amplitude confortável e retorne com controle.','Evite compensar com o tronco ou forçar o cotovelo no fim do movimento.']],
[/abdominal máquina/i,['Regule assento e apoios para seu tamanho.','Mantenha quadril estável e faça o movimento pelo tronco.','Flexione o tronco de maneira gradual, contraindo o abdômen, e retorne devagar.','Evite puxar com os braços, fazer trancos ou exagerar a amplitude.']],
[/prancha isométrica/i,['Posicione antebraços sob os ombros e apoie as pontas dos pés.','Mantenha cabeça, tronco e quadril aproximadamente alinhados.','Contraia abdômen e glúteos e respire normalmente durante o tempo previsto.','Evite deixar a lombar afundar, elevar demais o quadril ou prender a respiração.']],
[/esteira caminhada/i,['Prenda o cordão de segurança quando disponível e ajuste velocidade progressivamente.','Olhe à frente e mantenha braços livres e postura ereta.','Caminhe com passada natural, sem se apoiar continuamente nas barras.','Evite iniciar em velocidade alta ou olhar constantemente para baixo.']],
[/escada máquina/i,['Ajuste o nível e utilize os apoios apenas para equilíbrio.','Mantenha tronco estável e passos regulares.','Suba apoiando o pé com controle e mantendo respiração confortável.','Evite sustentar o peso do corpo nos braços ou acelerar sem estabilidade.']],
[/mesa flexora/i,['Alinhe o joelho ao eixo da máquina e ajuste o rolo próximo à parte inferior da perna.','Mantenha quadril e tronco apoiados.','Flexione os joelhos sem levantar o quadril e retorne lentamente.','Evite tirar o quadril do banco ou fazer movimentos bruscos.']],
[/cadeira flexora/i,['Ajuste encosto, eixo do joelho e rolo de apoio.','Mantenha quadril estável e costas apoiadas.','Flexione os joelhos com controle e retorne gradualmente.','Evite impulso e amplitudes dolorosas.']],
[/cadeira extensora/i,['Alinhe os joelhos ao eixo e ajuste o apoio próximo ao tornozelo.','Mantenha costas e quadril apoiados.','Estenda os joelhos dentro da amplitude confortável e retorne lentamente.','Evite trancos ou carga que provoque dor no joelho.']],
[/elevação lateral/i,['Escolha uma carga que permita controle sem balanço.','Mantenha cotovelos levemente flexionados e pescoço relaxado.','Eleve os braços lateralmente até amplitude confortável e retorne devagar.','Evite encolher os ombros ou usar impulso do tronco.']],
[/elevação frontal/i,['Ajuste a polia e mantenha postura estável.','Segure o acessório sem tensionar o pescoço.','Eleve à frente com controle e retorne sem deixar o peso cair.','Evite arquear a lombar ou elevar além da amplitude confortável.']],
[/elevação de quadril/i,['Ajuste os apoios da máquina e posicione os pés firmes.','Mantenha abdômen ativo e pescoço neutro.','Eleve o quadril contraindo os glúteos e retorne lentamente.','Evite hiperestender a lombar ou perder o alinhamento dos joelhos.']],
[/agachamento/i,['Ajuste a máquina ou a posição dos pés conforme a variação.','Mantenha pés estáveis e joelhos acompanhando a direção dos pés.','Flexione quadril e joelhos dentro de amplitude confortável e suba com controle.','Evite deixar os joelhos colapsarem para dentro ou arredondar a coluna.']],
[/supino/i,['Ajuste banco e pegada para a variação prescrita.','Mantenha pés firmes, escápulas estáveis e punhos alinhados.','Desça com controle e empurre sem perder o apoio das costas.','Evite quicar a carga, abrir demais os cotovelos ou forçar os ombros.']],
[/crucifixo/i,['Ajuste banco e manoplas à altura confortável do peito.','Mantenha costas apoiadas e cotovelos levemente flexionados.','Aproxime os braços à frente do peito e retorne lentamente.','Evite tirar as costas do apoio, esticar demais os cotovelos ou forçar os ombros.']],
[/rosca|bíceps/i,['Ajuste a pegada e selecione uma carga controlável.','Mantenha tronco estável e cotovelos próximos da posição inicial.','Flexione os cotovelos sem balançar o corpo e retorne lentamente.','Evite usar a lombar para impulsionar a carga.']],
[/stiff/i,['Posicione os pés firmes e mantenha a carga próxima ao corpo.','Mantenha joelhos suavemente flexionados e coluna neutra.','Leve o quadril para trás e retorne contraindo glúteos, sem perder a postura.','Evite arredondar a coluna ou descer além da mobilidade disponível.']]
];
function exerciseGuide(e){const match=EXERCISE_GUIDES.find(([re])=>re.test(e.name));if(match)return match[1];return ['Confira a regulagem específica do aparelho com o profissional responsável.','Mantenha postura estável e amplitude confortável, sem dor.','Execute cada repetição de modo controlado, respeitando a ficha prescrita.','Evite trancos, cargas excessivas e compensações com outras partes do corpo.'];}

/* Ilustrações vetoriais locais: sem dependência de fotos ou links externos. */

/* Desenhos técnicos vetoriais para os aparelhos da ficha, sem imagens de terceiros. */
function exerciseDiagram(e,phase){
 const n=(e.name||'').toLowerCase(),end=phase===1;
 const lat=/puxador|puxada articulada/.test(n),row=/remada/.test(n),tri=/tríceps/.test(n),abs=/abdominal máquina/.test(n),plank=/prancha/.test(n),tread=/esteira/.test(n);
 const cable=/polia/.test(n)||/remada baixa/.test(n);
 const stroke='#a8b9c5',metal='#547481',skin='#f0c6a0',gold='#e2bd6c',floor='<path d="M9 158H151" stroke="#547481" stroke-width="3"/>';
 const machine=lat?'<path d="M23 151V18H137V151M25 22H134M32 38H124M36 145H121" stroke="'+metal+'" stroke-width="6" fill="none"/><rect x="51" y="105" width="62" height="8" rx="4" fill="'+stroke+'"/><rect x="55" y="120" width="54" height="8" rx="4" fill="'+stroke+'"/>':row?'<path d="M18 151V26H142V151M22 30H138M95 133H145" stroke="'+metal+'" stroke-width="6" fill="none"/><rect x="51" y="119" width="47" height="9" rx="4" fill="'+stroke+'"/>':tri?'<path d="M27 153V17H133V153M30 20H131M42 35V140" stroke="'+metal+'" stroke-width="6" fill="none"/><circle cx="45" cy="30" r="7" fill="'+gold+'"/>':abs?'<path d="M20 149V33H141V149M33 118H127M41 45H122" stroke="'+metal+'" stroke-width="6" fill="none"/><rect x="53" y="105" width="63" height="10" rx="4" fill="'+stroke+'"/>':tread?'<path d="M13 150H148L129 134H35Z M119 136V48H143" stroke="'+metal+'" stroke-width="6" fill="none"/>':plank?'<rect x="14" y="143" width="132" height="9" rx="4" fill="'+metal+'"/>':cable?'<path d="M18 150V18H140V150M23 22H137" stroke="'+metal+'" stroke-width="6" fill="none"/>':'<path d="M22 149V32H138V149" stroke="'+metal+'" stroke-width="6" fill="none"/>';
 let human='';
 if(plank){human='<circle cx="38" cy="105" r="10" fill="'+skin+'"/><path d="M49 113L'+(end?'109 112':'108 124')+'L137 135M59 117L49 142M106 122L126 145" stroke="'+skin+'" stroke-width="8" stroke-linecap="round" fill="none"/>';}
 else if(tread){human='<circle cx="80" cy="51" r="11" fill="'+skin+'"/><path d="M80 64V109M80 79L62 96M82 79L105 93M80 109L'+(end?'106':'62')+' 143M80 109L'+(end?'61':'107')+' 143" stroke="'+skin+'" stroke-width="8" stroke-linecap="round" fill="none"/>';}
 else if(row){human='<circle cx="64" cy="64" r="11" fill="'+skin+'"/><path d="M64 78L64 118M64 118L49 146M64 118L86 146M65 88L'+(end?'92':'113')+' '+(end?'103':'88')+'" stroke="'+skin+'" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M'+(end?'92':'113')+' '+(end?'103':'88')+'H133" stroke="'+gold+'" stroke-width="4"/>';}
 else if(lat){let y=end?86:30;human='<circle cx="80" cy="65" r="11" fill="'+skin+'"/><path d="M80 79V121M80 121L65 145M80 121L97 145M78 90L55 '+y+'M83 90L109 '+y+'" stroke="'+skin+'" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M46 '+y+'H118" stroke="'+gold+'" stroke-width="5" stroke-linecap="round"/>';}
 else if(tri){let y=end?125:86;human='<circle cx="84" cy="50" r="11" fill="'+skin+'"/><path d="M84 64V110M84 110L66 145M84 110L101 145M81 80L66 '+y+'M88 80L106 '+y+'" stroke="'+skin+'" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M66 '+y+'L106 '+y+'" stroke="'+gold+'" stroke-width="5"/>';}
 else if(abs){human='<circle cx="'+(end?93:81)+'" cy="'+(end?67:52)+'" r="11" fill="'+skin+'"/><path d="M'+(end?'93 81L75':'81 65L82')+' 116M80 116L63 143M80 116L102 143M79 88L52 83M85 88L112 84" stroke="'+skin+'" stroke-width="8" stroke-linecap="round" fill="none"/>';}
 else {human='<circle cx="80" cy="51" r="11" fill="'+skin+'"/><path d="M80 64V110M80 110L65 144M80 110L101 144M80 79L'+(end?'53 89':'59 109')+'M82 79L'+(end?'112 89':'103 109')+'" stroke="'+skin+'" stroke-width="8" stroke-linecap="round" fill="none"/>';}
 const label=lat?'PUXADA ARTICULADA':row?'REMADA':tri?'TRÍCEPS':abs?'ABDOMINAL':plank?'PRANCHA':tread?'ESTEIRA':'MOVIMENTO';
 return '<svg class="exercise-illustration" viewBox="0 0 160 170" role="img" aria-label="'+(end?'Posição final':'Posição inicial')+' — '+label+'"><rect width="160" height="170" rx="12" fill="#0b2530"/>'+floor+machine+human+'</svg>';
}
const EXERCISE_PHOTOS=[
[/^abdominal máquina$/i,'Ab_Crunch_Machine'],
[/^esteira (caminhada|sprint)$/i,'Jogging_Treadmill'],
[/^mesa flexora$/i,'Lying_Leg_Curls'],
[/^cadeira extensora$/i,'Leg_Extensions'],
[/^crossover mini\/polia alta$/i,'Cable_Crossover'],
[/^tríceps mergulho máquina$/i,'Dip_Machine'],
[/^abdominal supra com corda na polia$/i,'Cable_Crunch'],
[/^crucifixo inverso sentado$/i,'Cable_Rear_Delt_Fly'],
[/^desenvolvimento em pé com halteres$/i,'Dumbbell_Shoulder_Press'],
[/^elevação de quadril na máquina$/i,'Barbell_Hip_Thrust'],
[/^puxador articulado pegada supinada$/i,'Close-Grip_Front_Lat_Pulldown'],
[/^tríceps scooth pegada neutra$/i,'Machine_Triceps_Extension'],
[/^puxada articulada de ação conjunta$/i,'Leverage_High_Row'],
[/^remada máquina pegada neutra$/i,'Leverage_Iso_Row'],
[/^supino máquina inclinado \(pegada pronada\)$/i,'Incline_Dumbbell_Press']
];
function exerciseVisuals(e){
 const item=EXERCISE_PHOTOS.find(([rx])=>rx.test(e.name||''));
 if(!item)return '<p class="visual-disclaimer">Ainda não há fotografias verificadas para este equipamento específico. Consulte as orientações abaixo e confirme a execução com o profissional.</p>';
 const id=item[1],base='https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/'+id+'/';
 const cards=[0,1].map((v)=>'<figure><img loading="lazy" decoding="async" src="'+base+v+'.jpg" alt="Demonstração '+(v+1)+' de '+safe(e.name)+'" onerror="this.closest(\'figure\').style.display=\'none\'"><figcaption>Posição '+(v+1)+'</figcaption></figure>').join('');
 return '<div class="exercise-visuals">'+cards+'</div><p class="visual-disclaimer">Fotografias ilustrativas de equipamento ou movimento semelhante. Confira as diferenças de máquina, pegada e amplitude com o profissional da academia. Fonte: Free Exercise DB (domínio público).</p>';
}
function guideMarkup(e){const g=exerciseGuide(e);return '<details class="guide"><summary>▣ Ver execução e orientações</summary><div class="guide-inner">'+exerciseVisuals(e)+'<h4>1. Ajuste do equipamento</h4><p>'+safe(g[0])+'</p><h4>2. Posicionamento</h4><p>'+safe(g[1])+'</p><h4>3. Execução do movimento</h4><p>'+safe(g[2])+'</p><div class="good"><strong>✓ Postura e movimento a buscar</strong><p>'+safe(g[1]+' '+g[2])+'</p></div><div class="bad"><strong>✕ Erros que devem ser evitados</strong><p>'+safe(g[3])+'</p></div><button class="secondary" onclick="openGuideModal('+current+','+db.days[current].exercises.indexOf(e)+')">ⓘ Ver detalhes</button></div></details>';}
function openGuideModal(day,j){const e=db.days[day]?.exercises[j];if(!e)return;const g=exerciseGuide(e);const m=document.getElementById('guideModal');m.querySelector('.modal-content').innerHTML='<h2>'+safe(e.name)+'</h2><p class="muted">Séries previstas: '+safe(e.sets)+' · Meta: '+safe(e.reps)+'</p>'+exerciseVisuals(e)+g.map((v,i)=>'<h3>'+(i+1)+'. '+['Ajuste do equipamento','Posicionamento','Execução do movimento','Cuidados e erros a evitar'][i]+'</h3><p>'+safe(v)+'</p>').join('')+'<div class="good"><strong>✓ Postura correta</strong><p>'+safe(g[1]+' '+g[2])+'</p></div><div class="bad"><strong>✕ Evite estes erros</strong><p>'+safe(g[3])+'</p></div><p class="muted">Demonstração esquemática; confirme a técnica com profissional habilitado.</p>';m.showModal();}
