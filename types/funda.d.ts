declare global {
  interface FundaApiHousesResponse {
    LocatieFeed: {
      _attributes: {
        'xmlns': string
        'xmlns:i': string
      }
      AccountStatus: FundaTextValue
      EmailNotConfirmed: FundaTextValue
      ValidationFailed: FundaTextValue
      ValidationReport: {
        _attributes: {
          'i:nil': string
          'xmlns:a': string
        }
      }
      Website: FundaTextValue
      Metadata: {
        ObjectType: FundaTextValue
        Omschrijving: FundaTextValue
        Titel: FundaTextValue
      }
      Paging: {
        AantalPaginas: FundaTextValue
        HuidigePagina: FundaTextValue
        VolgendeUrl: FundaTextValue
        VorigeUrl: {
          _attributes: {
            'i:nil': string
          }
        }
      }
      TotaalAantalObjecten: FundaTextValue
      Objects: {
        Object: FundaObject[]
      }
    }
  }

  interface FundaObject {
    AangebodenSindsTekst: FundaTextValue
    AanmeldDatum: FundaTextValue
    AantalBeschikbaar: FundaNilValue
    AantalKamers: FundaTextValue
    AantalKavels: FundaNilValue
    Aanvaarding: FundaTextValue
    Adres: FundaTextValue
    Afstand: FundaTextValue
    BronCode: FundaTextValue
    ChildrenObjects: Record<string, unknown>
    DatumAanvaarding: FundaNilValue
    DatumOndertekeningAkte: FundaNilValue
    Foto: FundaTextValue
    FotoLarge: FundaTextValue
    FotoLargest: FundaTextValue
    FotoMedium: FundaTextValue
    FotoSecure: FundaTextValue
    GewijzigdDatum: FundaNilValue
    GlobalId: FundaTextValue
    GroupByObjectType: FundaTextValue
    Heeft360GradenFoto: FundaTextValue
    HeeftBrochure: FundaTextValue
    HeeftOpenhuizenTopper: FundaTextValue
    HeeftOverbruggingsgarantie: FundaTextValue
    HeeftPlattegrond: FundaTextValue
    HeeftTophuis: FundaTextValue
    HeeftVeiling: FundaTextValue
    HeeftVideo: FundaTextValue
    HuurPrijsTot: FundaNilValue
    Huurprijs: FundaNilValue
    HuurprijsFormaat: FundaNilValue
    Id: FundaTextValue
    InUnitsVanaf: FundaNilValue
    IndProjectObjectType: FundaTextValue
    IndTransactieMakelaarTonen: FundaNilValue
    IsSearchable: FundaTextValue
    IsVerhuurd: FundaTextValue
    IsVerkocht: FundaTextValue
    IsVerkochtOfVerhuurd: FundaTextValue
    Koopprijs: FundaTextValue
    KoopprijsFormaat: FundaTextValue
    KoopprijsTot: FundaTextValue
    Land: FundaNilValue
    MakelaarId: FundaTextValue
    MakelaarNaam: FundaTextValue
    MobileURL: FundaTextValue
    Note: FundaNilValue
    OpenHuis: Record<string, unknown>
    Oppervlakte: FundaTextValue
    Perceeloppervlakte: FundaTextValue
    Postcode: FundaTextValue
    Prijs: FundaPrice
    PrijsGeformatteerdHtml: FundaTextValue
    PrijsGeformatteerdTextHuur: FundaTextValue
    PrijsGeformatteerdTextKoop: FundaTextValue
    Producten: FundaProducts
    Project: FundaProject
    ProjectNaam: FundaNilValue
    PromoLabel: FundaPromoLabel
    PublicatieDatum: FundaTextValue
    PublicatieStatus: FundaTextValue
    SavedDate: FundaNilValue
    SoortAanbod: FundaTextValue
    Soort_aanbod: FundaTextValue
    StartOplevering: FundaNilValue
    TimeAgoText: FundaNilValue
    TransactieAfmeldDatum: FundaNilValue
    TransactieMakelaarId: FundaNilValue
    TransactieMakelaarNaam: FundaNilValue
    TypeProject: FundaTextValue
    URL: FundaTextValue
    VerkoopStatus: FundaTextValue
    WGS84_X: FundaTextValue
    WGS84_Y: FundaTextValue
    WoonOppervlakteTot: FundaTextValue
    Woonoppervlakte: FundaTextValue
    Woonplaats: FundaTextValue
    ZoekType: FundaSearchType
  }

  interface FundaTextValue {
    _text: string
  }

  interface FundaNilValue {
    _attributes: {
      'i:nil': string
    }
  }

  interface FundaPrice {
    GeenExtraKosten: FundaTextValue
    HuurAbbreviation: Record<string, unknown>
    Huurprijs: FundaNilValue
    HuurprijsOpAanvraag: Record<string, unknown>
    HuurprijsTot: FundaNilValue
    KoopAbbreviation: FundaTextValue
    Koopprijs: FundaTextValue
    KoopprijsOpAanvraag: Record<string, unknown>
    KoopprijsTot: FundaTextValue
    OriginelePrijs: FundaNilValue
    VeilingText: Record<string, unknown>
  }

  interface FundaProducts {
    '_attributes': {
      'xmlns:a': string
    }
    'a:string': FundaTextValue[]
  }

  interface FundaProject {
    AantalKamersTotEnMet: FundaNilValue
    AantalKamersVan: FundaNilValue
    AantalKavels: FundaNilValue
    Adres: FundaNilValue
    FriendlyUrl: FundaNilValue
    GewijzigdDatum: FundaNilValue
    GlobalId: FundaNilValue
    HoofdFoto: FundaTextValue
    IndIpix: FundaTextValue
    IndPDF: FundaTextValue
    IndPlattegrond: FundaTextValue
    IndTop: FundaTextValue
    IndVideo: FundaTextValue
    InternalId: FundaTextValue
    MaxWoonoppervlakte: FundaNilValue
    MinWoonoppervlakte: FundaNilValue
    Naam: FundaNilValue
    Omschrijving: FundaNilValue
    OpenHuizen: Record<string, unknown>
    Plaats: FundaNilValue
    Prijs: FundaNilValue
    PrijsGeformatteerd: FundaNilValue
    PublicatieDatum: FundaNilValue
    Type: FundaTextValue
    Woningtypen: FundaObjectType
  }

  interface FundaPromoLabel {
    '_attributes': {
      'xmlns:a': string
    }
    'a:HasPromotionLabel': FundaTextValue
    'a:PromotionPhotos': Record<string, unknown>
    'a:PromotionPhotosSecure': FundaNilValue & {
      _attributes: {
        'xmlns:b': string
      }
    }
    'a:PromotionType': FundaTextValue
    'a:RibbonColor': FundaTextValue
    'a:RibbonText': FundaNilValue
    'a:Tagline': FundaNilValue
  }

  interface FundaSearchType {
    '_attributes': {
      'xmlns:a': string
    }
    'a:SoortAanbod': FundaTextValue
  }

  interface FundaObjectType {
    _attributes: {
      'i:nil': string
      'xmlns:a': string
    }
  }

  interface FundaViewingOption {
    Naam: string
    Waarde: string
  }

  interface FundaProperty {
    'Naam': string
    'NaamCss'?: string
    'Waarde'?: string
    'WaardeCss?': string
  }

  interface FundaObjectProperty {
    Ad: string
    Kenmerken: FundaProperty[]
    LokNummer: number
    SubKenmerk: FundaProperty
    Titel: string
  }

  interface FundaMediaItem {
    Category: number
    Height: number
    Url: string
    UrlSecure: string
    Width: number
  }

  interface FundaMediaCategory {
    Categorie: number
    ContentType: number
    Id: string
    IndexNumber: number
    MediaItems: FundaMediaItem[]
    Metadata: any // Adjust the type if you have more specific information
    Omschrijving: string | null
    RegistratieVerplicht: boolean
    Soort: number
  }

  interface FundaObjectDetail {
    'AangebodenSinds': string
    'AangebodenSindsTekst': string
    'AantalBadkamers': number
    'AantalKamers': number
    'AantalSlaapkamers?': number
    'AantalWoonlagen': string
    'Aanvaarding': string
    'Adres': string
    'AfgekochtDatum'?: string
    'BalkonDakterras'?: string
    'BedrijfsruimteCombinatieObject'?: string
    'BezichtingDagdelen': FundaViewingOption[]
    'BezichtingDagen': FundaViewingOption[] // FundaViewingOption[]
    'BijdrageVVE'?: string
    'Bijzonderheden'?: string
    'Bouwjaar': string
    'Bouwvorm': string
    'BronCode': string
    'ContactpersoonEmail'?: string
    'ContactpersoonTelefoon'?: string
    'Cv': string
    'DatumOndertekeningAkte'?: string
    'Deeplink'?: string
    'DetailInfo': {
      HasPromotionLabel: boolean
      PromotionLabelType: number
      RibbonColor: number
      RibbonText?: string
      Tagline?: string
    }
    'EigendomsSituatie'?: string
    'Energielabel': {
      Definitief: boolean
      Index?: string
      Label: string
      NietBeschikbaar: boolean
      NietVerplicht: boolean
    }
    'ErfpachtBedrag'?: string
    'Garage': string
    'GarageIsolatie'?: string
    'GarageVoorzieningen'?: string
    'GelegenOp'?: string
    'GewijzigdDatum': string
    'HoofdFoto': string
    'HoofdFotoSecure': string
    'HoofdTuinType': string
    'Id': number
    'IndBasisPlaatsing': boolean
    'IndFotos': boolean
    'IndIpix': boolean
    'IndOpenhuizenTopper': boolean
    'IndPDF': boolean
    'IndPlattegrond': boolean
    'IndTop': boolean
    'IndVeilingProduct': boolean
    'IndVideo': boolean
    'Inhoud': 308
    'InternalId': string
    'IsIngetrokken': boolean
    'IsVerhuurd': boolean
    'IsVerkocht': boolean
    'Isolatie': string
    'Kenmerken': FundaObjectProperty[]
    'KenmerkenKort': FundaObjectProperty
    'KenmerkenTitel'?: string
    'Ligging': string
    'MLIUrl': string
    'Makelaar': string
    'MakelaarId': number
    'MakelaarTelefoon': string
    'MedeAanbieders'?: string[]
    'Media': FundaMediaCategory[]
    'Media-Foto': string[]
    'MobileURL': string
    'ObjectType': string
    'ObjectTypeMetVoorvoegsel': string
    'OpenHuizen'?: string[]
    'PerceelOppervlakte': number
    'PermanenteBewoning': string
    'Plaats': string
    'Postcode': string
    'Prijs': {
      GeenExtraKosten?: string
      HuurAbbreviation: string
      Huurprijs?: string
      HuurprijsOpAanvraag: string
      HuurprijsTot?: string
      KoopAbbreviation: string
      Koopprijs: number
      KoopprijsOpAanvraag: string
      KoopprijsTot?: string
      OriginelePrijs?: string
      VeilingText: string
    }
    'PrijsGeformatteerd': string
    'Project'?: string
    'ProjectNaam'?: string
    'PublicatieDatum'?: string
    'PublicatieStatus': number
    'SchuurBerging': string
    'SchuurBergingIsolatie'?: string
    'SchuurBergingVoorzieningen': string
    'ScrambledId': string
    'ServiceKosten'?: number
    'SoortAanbod': number
    'SoortDak': string
    'SoortGarage': string
    'SoortParkeergelegenheid': string
    'SoortPlaatsing': number
    'SoortWoning': string
    'Titels': {
      Omschrijving: string
      Pagina: number
    }
    'ToonBezichtigingMaken': boolean
    'ToonBrochureAanvraag': boolean
    'ToonMakelaarWoningaanbod': boolean
    'ToonReageren': boolean
    'TransactieAfmeldDatum'?: string
    'TransactieMakelaarId'?: string
    'TransactieMakelaarNaam'?: string
    'TuinLigging': string
    'TypeProject': number
    'URL': string
    'Veiling': {
      EindDatum?: string
      Link?: string
      StartDatum?: string
      VeilingPartij?: string
    }
    'VerkoopStatus': string
    'Verwarming': string
    'Video'?: string
    'VolledigeOmschrijving': string
    'Voorzieningen': string
    'WGS84_X': number
    'WGS84_Y': number
    'WarmWater': string
    'WoonOppervlakte': number
    'EersteHuurPrijs'?: string
    'EersteHuurPrijsLang'?: string
    'EersteKoopPrijs'?: string
    'EersteKoopPrijsLang'?: string
    'HuurPrijs'?: string
    'HuurPrijsLang'?: string
    'HuurPrijsTot'?: string
    'Huurprijs'?: string
    'HuurprijsFormaat'?: string
    'KoopPrijs': number
    'KoopPrijsLang': string
    'Koopprijs': number
    'KoopprijsFormaat': string
    'KoopprijsTot'?: string
    'ShortURL': string
    'Tuin': string
    'VeilingGeformatteerd'?: string
  }

}

export default {}
