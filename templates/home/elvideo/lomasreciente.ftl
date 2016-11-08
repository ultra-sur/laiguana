<div class="list-news-card double-size lomasreciente hidden-sm hidden-xs margin-left-5 margin-top-10">
    <img class="img-responsive" src="/activos/images/lo-reciente-head.jpg" alt="Card image cap">

    <ul class="list-group list-group-flush">
    <#list notas.getLista("restantes") as nota>
        <li class="list-group-item clean <#if nota?index == 0>with-image</#if>"">
            <#if nota?index == 0>
                <img src="${notas.getNota("restantes",1).getHeroImage()}" alt="Cara a Cara">
            </#if>
            <a href="${nota.getPath()}">
                <h3 class="titulo titulo-wrap">${nota.getTitulo(65)}</h3>
            </a>
        </li>
        <#if nota?counter == 12>
            <#break>
        </#if>
    </#list>
    </ul>
</div>
