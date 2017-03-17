<div class="list-news-card single-size lomasleido hidden-mobile margin-top-10 <#if imagesLoMasLeido>with-image</#if> ">
    <img class="card-img-top" src="/activos/assets/img/lomasleido_header.png" alt="Lo + leido">
    <ul class="list-group list-group-flush">

    <#list notas.getLista("masleidas") as nota>
        <li class="list-group-item clean <#if nota?index == 0 || imagesLoMasLeido>with-image</#if>">
            <a href="${nota.getPath()}">
                <#if nota?index == 0 || imagesLoMasLeido >
                    <img src="${nota.getHeroImage()}" alt="${nota.getTitulo()}"
                         title=""
                         style="width: 90%;heigth: auto;">
                </#if>

                <h3 class="titulo">
                    ${nota.getTitulo(80)}
                </h3>
            </a>
        </li>
        <#if nota?counter == 4>
            <#break>
        </#if>
    </#list>
    </ul>
</div>
