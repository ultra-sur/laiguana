<#if notas.getNota("lomasjot", elvideoindex).getYoutube()??>
<div class="lomasjot el-video content-row h-normal">
    <div class="col-md-8 clean vstretch" style="overflow: hidden;">
        <div class="stretch el-video-container">
            <img class="" src="/activos/assets/img/elvideo_header.png" alt="El video" style="width: 100%; heigth: auto; ">
            <#include "elvideo_container_youtube.ftl">
            <div class="clearfix"></div>

        </div>
        <div class="clearfix"></div>

    </div>

    <div class="col-md-4 h-normal hidden-sm hidden-xs" style="padding-right: 5px; padding-left: 0px">
        <div class="ucard h-normal stretch round-right clean no-border">
            <img class="card-img-top" src="/activos/assets/img/lohot_header.png" alt="Lo + jot" >

            <ul class="orange-border list-group list-group-flush" style="padding-top: 5px; margin-bottom: 0px; height: 421px;">
            <#list 2..4 as x>
                <li class="list-group-item clean">
                    <h3 class="titulo">
                        <a class="nolink" href="${notas.getNota("lomasjot",x).getPath()}">
                            <img class="no-margin no-padding" src="${notas.getNota("lomasjot",x).getHeroImage()}" alt="${notas.getNota("lomasjot",x).getTitulo()}" style="width:100%; height: 80px;">
                        ${notas.getNota("lomasjot",x).getTitulo(75)}
                        </a>
                    </h3>
                </li>
            </#list>
            </ul>

        </div>
    </div>
</div>
<#else>
<!-- uAlert: La nota ${notas.getNota("lomasjot", elvideoindex).getId()} no tiene video de Youtube asignado -->
<script>
    console.log("uAlert: La nota ${notas.getNota("lomasjot", elvideoindex).getId()} no tiene video de Youtube asignado");
</script>

</#if>

