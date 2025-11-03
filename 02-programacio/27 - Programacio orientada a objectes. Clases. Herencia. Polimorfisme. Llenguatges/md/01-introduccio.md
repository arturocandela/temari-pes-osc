# 1. Introducció

El paradigma de la **programació modular** resol problemes dividint-los en un conjunt de funcions que operen sobre dades comunes. A mesura que creix la complexitat, també ho fan les interrelacions i l’**acoblament** entre funcions, cosa que dificulta el manteniment: un canvi local pot afectar altres parts del programa sense que siga trivial detectar-ho. :contentReference[oaicite:0]{index=0}

Davant d’aquesta problemàtica, sorgeix la **programació orientada a objectes (OOP)** com a alternativa i complement. En OOP es combinen **dades i funcions relacionades** dins d’una unitat anomenada **objecte**. :contentReference[oaicite:1]{index=1}

En aquest tema s’estudia què és la OOP i de quins elements es compon; s’exposen els seus **pilars fonamentals** —**encapsulació**, **abstracció**, **herència** i **polimorfisme**— i es revisen els **llenguatges** de programació orientats a objectes més utilitzats. Tots els **exemples** es presenten en **Java** per ser un llenguatge representatiu del paradigma. :contentReference[oaicite:2]{index=2}

La idea bàsica és proporcionar al programador **models més pròxims al món real** que els de la programació modular; per això, la unitat fonamental és l’**objecte**. :contentReference[oaicite:3]{index=3}

---

## 1.1. Què es veurà al tema

- **Classes i objectes**: definició d’atributs i mètodes, diferència entre **membres d’objecte** i **de classe**, i el paper de **constructors** i **destructors** (amb menció al *garbage collector* en Java). :contentReference[oaicite:4]{index=4} :contentReference[oaicite:5]{index=5}  
- **Associacions** entre classes, amb especial atenció a **agregació** i **composició**. :contentReference[oaicite:6]{index=6}  
- **Els 4 pilars de la OOP**:  
  - **Encapsulació**: unificació de dades i operacions, i control d’accés als atributs mitjançant **modificadors** (`public`, `protected`, per defecte, `private`). :contentReference[oaicite:7]{index=7}  
  - **Abstracció**: reducció de la informació exposada i ocultació de detalls no rellevants (p. ex., `arranca()` enmascara la seqüència interna d’arrencada). :contentReference[oaicite:8]{index=8}  
  - **Herència**: reutilització i especialització via relació “**és un**” (simple o múltiple, segons el llenguatge). :contentReference[oaicite:9]{index=9}  
  - **Polimorfisme**: sobrecàrrega, sobreescriptura i **variables polimòrfiques**. :contentReference[oaicite:10]{index=10}  
- **Llenguatges orientats a objectes** més destacats i la seua orientació dins del paradigma. :contentReference[oaicite:11]{index=11}

---

## 1.2. Per què OOP?

L’objectiu de la OOP és **reduir la complexitat** de les solucions, facilitar la **reutilització** i acostar els dissenys a conceptes del **món real**. En organitzar el codi al voltant d’objectes, es millora la **mantenibilitat** i es disposa d’eines expressives per modelar sistemes amb menor acoblament i major cohesió. :contentReference[oaicite:12]{index=12}
