<div class="col-g nota">
    <div class="card stretch green-border round-left"  style="overflow: hidden">
        <img class="iguanazos-header-image" src="/activos/assets/img/iguanazos_header.png" alt="Iguanazos">

        <img class="iguanazos-header-body card-img-top img-responsive" src="${notas.getNota("iguanazos",1).getHeroImage()}" alt="${notas.getNota("iguanazos",1).getTitulo()}" >
    </div>
</div>

<div class="col-p hidden-sm hidden-xs">
    <div class="ucard orange-border round-right vstretch">
        <img class="card-img-top" src="/activos/assets/img/iguant_header.png" alt="Iguanazos Anteriores">

    <#list 2..4 as pos>
        <div class="iguanant">
            <img class="iguanant-img img-responsive" src="${notas.getNota("iguanazos",pos).getHeroImage()}" alt="${notas.getNota("iguanazos",pos).getTitulo()}" style="">
        </div>
    </#list>

    </div>
</div>

<div class="clearfix"></div>

