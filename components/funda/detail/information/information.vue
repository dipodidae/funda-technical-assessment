<script setup lang="ts">
const props = defineProps<{
  fundaObjectDetail: FundaObjectDetail
}>()
</script>

<template>
  <div class="flex flex-col gap-4 py-4">
    <FundaDetailInformationSection>
      <FundaDetailInformationSectionTitle>
        Omschrijving
      </FundaDetailInformationSectionTitle>
      <FundaDetailInformationSectionFoldableContent :content="props.fundaObjectDetail.VolledigeOmschrijving" />
    </FundaDetailInformationSection>
    <FundaDetailInformationSection>
      <FundaDetailInformationSectionTitle>
        Kenmerken
      </FundaDetailInformationSectionTitle>
      <FundaDetailInformationSectionProperty label="Vraagprijs" :content="String(props.fundaObjectDetail.Prijs.Koopprijs)" />
      <FundaDetailInformationSectionProperty label="Status" :content="props.fundaObjectDetail.VerkoopStatus" />
      <FundaDetailInformationSectionProperty label="Aanvaarding" :content="props.fundaObjectDetail.Aanvaarding" />
    </FundaDetailInformationSection>
    <FundaDetailInformationSection>
      <FundaDetailInformationSectionTitle>
        Bouw
      </FundaDetailInformationSectionTitle>
      <FundaDetailInformationSectionProperty label="Soort woonhuis" :content="props.fundaObjectDetail.SoortWoning" />
      <FundaDetailInformationSectionProperty label="Type bouw" :content="props.fundaObjectDetail.Bouwvorm" />
      <FundaDetailInformationSectionProperty label="Bouwjaar" :content="props.fundaObjectDetail.Bouwjaar" />
    </FundaDetailInformationSection>
    <FundaDetailInformationSection>
      <FundaDetailInformationSectionTitle>
        Oppervlakte en inhoud
      </FundaDetailInformationSectionTitle>
      <FundaDetailInformationSectionProperty label="Woonoppervlakte" :content="`${props.fundaObjectDetail.WoonOppervlakte} m2`" />
      <FundaDetailInformationSectionProperty label="Perceeloppervlakte" :content="`${props.fundaObjectDetail.PerceelOppervlakte} m2`" />
      <FundaDetailInformationSectionProperty label="Inhoud" :content="`${props.fundaObjectDetail.Inhoud} m3`" />
    </FundaDetailInformationSection>
    <FundaDetailInformationSection>
      <FundaDetailInformationSectionTitle>
        Indeling
      </FundaDetailInformationSectionTitle>
      <FundaDetailInformationSectionProperty label="Aantal kamers" :content="props.fundaObjectDetail.AantalKamers" />
      <FundaDetailInformationSectionProperty v-if="props.fundaObjectDetail.AantalSlaapkamers" label="Aantal slaapkamers" :content="props.fundaObjectDetail.AantalSlaapkamers" />
      <FundaDetailInformationSectionProperty label="Aantal badkamers" :content="props.fundaObjectDetail.AantalBadkamers" />
    </FundaDetailInformationSection>
  </div>
</template>
