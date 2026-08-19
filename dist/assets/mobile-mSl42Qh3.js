import{u as l,s as n,p as a,o as p}from"./ui-BOgU7RgJ.js";const c={tpl:`
    <div class="mobile_entry">
      <h2>{year}</h2>
      <p>{text}</p>
      <p class="small">Population estimate {pop}</p>
    </div>
  `,init:function(){const t=this;this.target=$("#mobile_content_target"),this.apiRoot="https://ray.scot/stgiles";const r=window.location.href,e=new URL(r),s=parseInt(e.searchParams.get("id"));if(s>0){const o=t.apiRoot+"/?auth=s$fsqi-928&command=surnameFromID&id="+s;$.get(o,function(i){i=JSON.parse(i),t.id=i.id,t.surname=i.surname,t.num_records=i.num_records,l.ph("surname",t.surname),l.ph("num_records",t.num_records),t.populate()})}},populate:function(){const t=this;n.init(this.surname,this.id,this.apiRoot,function(r){console.log(n.data);let e="";r?a.init(t.id,t.apiRoot,function(){for(var s in n.data){let o=t.tpl;const i=n.data[s];o=o.replaceAll("{year}",i.year),o=o.replaceAll("{text}",i.text+(i.historical==""?"":' </p><p class="small">'+i.historical+"<p>")),o=o.replaceAll("{pop}",a.population(i.year)),e+=o}t.target.html(e)}):a.init(t.id,t.apiRoot,function(s){p.show(s,t.surname,t.num_records,!0)})})}};$(window).on("load",function(){c.init()});
