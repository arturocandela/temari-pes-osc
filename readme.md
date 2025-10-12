# Temari PES Informàtica (Comunitat Valenciana)

Aquest projecte té com a objectiu recopilar, estructurar i compartir **materials didàctics, temaris i recursos** relacionats amb les **oposicions al cos de Professors d’Ensenyament Secundari (PES) d’Informàtica** a la Comunitat Valenciana.

A més, busca servir com a **referència per a la docència** en mòduls d’Informàtica de la Formació Professional i com a **exemple pràctic** dins d’un curs del CEFIRE sobre la redacció de documents docents en **Markdown** i la gestió col·laborativa amb **Git**.

## 🎯 Objectius del projecte

* Crear un **temari obert i estructurat** en Markdown per als temes oficials d’oposicions d’Informàtica.
* Afavorir la **col·laboració entre docents**, compartint materials que puguen reutilitzar-se en classes reals.
* Difondre l’ús de **Markdown, Git i GitHub/GitLab** com a eines de documentació i difusió de coneixement.
* Facilitar la generació automàtica de **PDFs, HTML o GitBook** a partir dels fitxers de Markdown.
* Promoure la **docència oberta, accessible i reutilitzable** dins de la comunitat educativa valenciana.

## 🧱 Estructura del projecte

La proposta d’estructura serà la següent:

```
temari-pes-osc/
├── 00-contextualitzacio/
│   └── contextualitzacio.md
├── 02-programacio/
│   └── tema2.md
├── 03-sistemes-operatius/
│   └── ...
├── annexos/
│   ├── bibliografia.md
│   ├── legislacio.md
│   └── recursos.md
├── scripts/
│   └── docker-plantuml.sh
├── LICENSE
├── readme.md
└── temari-pes-osc.code-workspace
```

Cada carpeta correspondrà a un **bloc temàtic** del temari oficial del cos de Professors d’Informàtica (BOE 21/09/1993).

## 🧩 Format i convencions

* Tot el contingut es redacta en **Markdown estàndard** (`.md`), pero poc a poc airà actualitzant-se a sintaxi `Pandoc`.
* Els documents hauran d’evitar dependències de processadors propietaris (Word, Pages, etc.).
* Per a generar diagrames, es recomana **PlantUML** o **Mermaid**.
* Les imatges es desen en `./md_media/` dins de cada tema.
* El llenguatge recomanat és **valencià formal**, tot i que es poden incloure versions en castellà.

## 🧰 Eines recomanades

* [Visual Studio Code](https://code.visualstudio.com/) amb l’extensió *Markdown All in One*.
* [Git](https://git-scm.com/) per al control de versions.
* [Docker](https://www.docker.com/) (per executar `docker-plantuml.sh` i generar diagrames).
* [Pandoc](https://pandoc.org/) per a la conversió a altres formats (PDF, DOCX, HTML).

## 📚 Referències oficials

* [BOE 21/09/1993 - Temario Informática PES](https://www.boe.es/boe/dias/1993/09/21/pdfs/A27606-27630.pdf)
* [ORDRE 65/2012, DOGV 6889 – Currículum FP Informàtica](https://dogv.gva.es/)
* [CEFIRE - Formació del Professorat](https://cefire.edu.gva.es/)

## 🤝 Contribució

Tots els docents i opositors interessats poden:

1. **Fer un fork** del repositori.
2. **Afegir o corregir** temes en Markdown.
3. Fer un **pull request** per a proposar canvis.

El projecte aposta per un model **col·laboratiu i obert**, sota llicència **MIT**.

## 📄 Llicència

Aquest projecte està distribuït sota la llicència [Creative Commons](LICENSE).

---

> ✨ *“Compartir coneixement és l’acte més revolucionari que pot fer un docent.”*