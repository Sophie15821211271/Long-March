const people=[
['洪超','1909—1934','初战突围','1934年10月21日，在百石战斗中到前沿侦察和指挥调炮，不幸中弹牺牲，年仅25岁。','红三军团第四师师长，是中央红军长征路上牺牲的第一位师长。百石战斗是中央红军长征首战。'],
['罗屏汉','1907—1935','策应突围','长期在粤赣边坚持斗争，参与策应中央红军突破封锁线。','参与策应罗塘谈判，以牵制敌军等行动掩护主力西进。1935年在粤赣边转战中牺牲。'],
['阮啸仙','1898—1935','留守斗争','主力长征后留守赣南，任中共赣南省委书记兼省军区政治委员。','1935年3月6日，在信丰、大余交界马岭率部突围时中弹牺牲。'],
['刘伯坚','1895—1935','留守斗争','在狱中写下《带镣行》等诗篇，以坚定信仰面对生死。','主力长征后任赣南军区政治部主任。1935年3月负伤被俘，坚贞不屈，3月21日在大余金莲山英勇就义。'],
['李乐天','1905—1936','留守斗争','参与创建油山游击队和革命根据地，被群众称为“游击司令”。','主力长征后任赣粤边特委书记、赣粤边军分区司令员兼政治委员。1936年1月在信丰境内突围中负伤牺牲。'],
['曾纪财','1908—1936','留守斗争','经秘密交通线引导项英、陈毅所部抵达油山，以忠诚守护革命。','曾任中共信丰县委书记。1936年被捕后坚贞不屈，2月11日英勇就义。'],
['蔡会文','1908—1935','留守斗争','主力长征后留在赣南坚持斗争，任湘粤赣边特委书记等职。','曾任赣南省军区司令员。1935年12月，在崇义赤水仙一带被俘后壮烈牺牲。']];
function render(filter='全部'){const grid=document.querySelector('#cards');grid.innerHTML='';people.forEach((p,i)=>{if(filter!=='全部'&&p[2]!==filter)return;const e=document.createElement('article');e.className='card';e.innerHTML='<div class="symbol">'+p[0].slice(0,1)+'</div><div class="copy"><small>'+p[2]+' / '+p[1]+'</small><h3>'+p[0]+'</h3><p>'+p[3]+'</p><details><summary>读他的故事</summary><p>'+p[4]+'</p></details></div>';grid.append(e)})}render();document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.filter)});
const stations=[['新屋里毛泽东旧居','追寻革命足迹',1],['突破第一道封锁线纪念馆','聆听初战突围',2],['赣粤边三年游击战争纪念馆','认识赣粤留守斗争',3],['南雄市博物馆','农民暴动雕塑讲解',0]];stations.forEach((s,i)=>{const el=document.createElement('article');el.className='audio';el.innerHTML='<small>0'+(i+1)+'</small><h3>'+s[0]+'</h3><p>'+s[1]+'</p><img src="assets/qr'+i+'.png" alt="'+s[0]+'音频二维码"><audio controls preload="none" src="assets/audio'+s[2]+'.mp3"></audio>';document.querySelector('#audios').append(el)});let gif=true;document.querySelector('#toggle').onclick=e=>{gif=!gif;document.querySelector('#route').src=gif?'assets/route.gif':'assets/route.png';e.target.textContent=gif?'切换静态路线图':'播放路线动图'};
const baseRender=render;render=function(filter='全部'){baseRender(filter);document.querySelectorAll('.card').forEach(card=>{const name=card.querySelector('h3').textContent;const i=people.findIndex(p=>p[0]===name);if(i>=0){const img=document.createElement('img');img.className='portrait';img.loading='lazy';img.alt=name+'烈士像';img.src='assets/portrait'+i+'.jpg';img.onerror=()=>{img.replaceWith(Object.assign(document.createElement('div'),{className:'symbol',textContent:name}))};card.querySelector('.symbol').replaceWith(img)}})};render();



