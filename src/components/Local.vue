<template>
  <div id="local">
    <h1 class="mt-2">Localização</h1>
    <div class="maps">
      <div>
        <h2>Fisioterapia</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.550708759339!2d-37.050467685198015!3d-10.921709992223034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3dcf6b29289%3A0x594af9f78fd16dca!2sCl%C3%ADnica%20Intervent!5e0!3m2!1spt-BR!2sbr!4v1605961108502!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          frameborder="0"
          style="border: 0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style lang="css">
#local {
  margin: 0 auto;
  text-align: center;
  padding-bottom: 5rem;
}

.maps {
  display: flex;
  justify-content: center;
}
.maps h2 {
  background-color: #86b198;
  color: #fff;
  width: 70%;
  margin: 1rem auto;
  padding: 0.7rem;
}
.maps iframe {
  max-width: 80%;
  margin: 0 auto;
}

h1 {
  color: #86b198;
}

@media only screen and (max-width: 456px) {
  .maps {
    flex-direction: column;
  }
}

@media only screen and (max-width: 768px) {
  .maps {
    flex-direction: column;
  }
}
</style>
