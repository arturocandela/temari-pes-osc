# 3.1. Encapsulació

La **encapsulació** és un dels quatre pilars fonamentals de la programació orientada a objectes.  
Consisteix a **combinar les dades i les operacions** que les manipulen dins d’una mateixa entitat —la classe— i a **restringir l’accés** als detalls interns mitjançant *modificadors de visibilitat*.

L’objectiu és protegir l’estat intern dels objectes, evitant que siga manipulat directament des de fora de la classe.  
D’aquesta manera, s’aconseguix **controlar com s’accedix i es modifica la informació**, i garantir la coherència del sistema.

---

## 3.1.1. Principi bàsic

Un objecte ofereix una **interfície pública** amb la qual altres objectes poden interactuar, mentre que els detalls interns de la seua implementació queden **ocults**.

Aquest principi és essencial per aconseguir:
* **Seguretat**: evita modificacions indegudes o inconsistents.
* **Flexibilitat**: permet canviar la implementació interna sense afectar el codi extern.
* **Claredat**: facilita l’ús de les classes sense conéixer el seu funcionament intern.

---

## 3.1.2. Exemple pràctic

```java
class Coche {
    private boolean en_marcha;

    // Mètodes privats (detalls interns)
    private void abreElFiltroDelAire(){
        System.out.println("Filtre de l’aire obert.");
    }

    private void calientaElMotor(){
        System.out.println("Motor en fase de preescalfament.");
    }

    // Mètode públic (interfície visible)
    public boolean arranca(){
        abreElFiltroDelAire();
        calientaElMotor();
        en_marcha = true;
        return en_marcha;
    }
}
```

En aquest exemple:
- Els mètodes `abreElFiltroDelAire()` i `calientaElMotor()` són **privats**, ja que només tenen sentit dins del procés d’arrancada del cotxe.
- El mètode `arranca()` és **públic** perquè forma part de la interfície que altres objectes poden utilitzar.

Això assegura que ningú puga manipular el procés d’arrencada sense passar pels passos correctes establerts pel dissenyador de la classe.

---

## 3.1.3. Modificadors d’accés

Els **modificadors de visibilitat** determinen el grau d’accessibilitat dels atributs i mètodes des d’altres parts del programa.  
En Java (i en la majoria de llenguatges OOP), s’utilitzen quatre nivells principals:

| Modificador | Accessible dins la classe | Accessible dins el paquet | Accessible des d’una subclasse | Accessible des de fora |
|--------------|---------------------------|----------------------------|--------------------------------|------------------------|
| `public`     | ✔️ | ✔️ | ✔️ | ✔️ |
| `protected`  | ✔️ | ✔️ | ✔️ | ❌ |
| *(sense)* (default) | ✔️ | ✔️ | ❌ | ❌ |
| `private`    | ✔️ | ❌ | ❌ | ❌ |

> 💡 **Nota:** el modificador sense paraula clau explícita (anomenat *package-private* o *default*) permet l’accés des de qualsevol classe del mateix paquet, però no des de fora.

---

## 3.1.4. Aplicació en atributs i mètodes

L’encapsulació s’aplica tant a **atributs** com a **mètodes**.

### Atributs
Solen declarar-se com `private` per evitar que siguen modificats directament.  
Per a accedir-hi, s’utilitzen **mètodes d’accés** (*getters* i *setters*).

```java
class Persona {
    private String nom;
    private int edat;

    // Getter
    public String getNom(){
        return nom;
    }

    // Setter
    public void setNom(String nom){
        this.nom = nom;
    }

    public int getEdat(){
        return edat;
    }

    public void setEdat(int edat){
        if (edat >= 0){
            this.edat = edat;
        }
    }
}
```

Els *setters* solen incloure validacions per evitar valors incorrectes (com una edat negativa).

### Mètodes
Els mètodes que només tenen sentit dins del context intern de la classe es declaren `private`, mentre que els que defineixen la interfície externa són `public`.

---

## 3.1.5. Beneficis de l’encapsulació

* **Evita dependències externes**: altres classes no depenen de la implementació interna.  
* **Millora la mantenibilitat**: es poden fer canvis interns sense afectar el codi client.  
* **Augmenta la seguretat del codi**: els valors interns no poden ser alterats de manera arbitrària.  
* **Facilita el test i el debug**: els errors es localitzen més fàcilment dins de la classe responsable.

---

## 3.1.6. Comparació visual

```text
Sense encapsulació:
    ┌──────────────┐
    │  Coche       │
    ├──────────────┤
    │ en_marcha    │ ← Accessible directament
    └──────────────┘
       ↑
       │ (manipulació directa)
       │
       └────── Altres classes

Amb encapsulació:
    ┌──────────────┐
    │  Coche       │
    ├──────────────┤
    │ - en_marcha  │ ← Privat
    │ + arranca()  │ ← Públic
    └──────────────┘
       ↑
       │ (accés controlat)
       └────── Altres classes
```

---

## 3.1.7. Resum final

| Concepte | Descripció | Exemple |
|-----------|-------------|----------|
| **Encapsulació** | Integrar dades i comportament dins d’una mateixa entitat | `class Coche { private boolean en_marcha; }` |
| **Accés controlat** | Evita modificacions externes directes | `getters` i `setters` |
| **Interfície pública** | Defineix com altres objectes interactuen amb la classe | `public void arranca()` |
| **Privacitat interna** | Amaga els detalls d’implementació | `private void calientaElMotor()` |

---

> *“Encapsular és oferir només allò que cal, i protegir allò que no cal mostrar.”*
