# 3.3.2. Interfícies

Les **interfícies** defineixen un conjunt de mètodes que una classe ha d’implementar.  
A diferència de les classes abstractes, **no contenen implementacions**, només la definició dels comportaments que les classes oferiran.

En altres paraules, una interfície és com un **contracte**: estableix què pot fer una classe, però no com ho fa.

---

## 3.3.2.1. Característiques principals

* Tots els **mètodes** d’una interfície són, per defecte, `public` i `abstract`.  
* Pot contindre **constants** (atributs `public static final`).  
* Una **classe pot implementar diverses interfícies**, la qual cosa permet aconseguir una mena d’**herència múltiple** de comportaments.  
* Les interfícies no poden ser instanciades directament.

---

## 3.3.2.2. Exemple bàsic

```java
interface OpcionRemolque {
    void engancharRemolque();
    void desengancharRemolque();
}

public class FordConRemolque extends VehiculoGasolina implements OpcionRemolque {
    @Override
    public void engancharRemolque(){
        System.out.println("Remolc enganxat.");
    }

    @Override
    public void desengancharRemolque(){
        System.out.println("Remolc desenganxat.");
    }
}
```

En aquest exemple:

* La interfície `OpcionRemolque` **defineix** dos mètodes.  
* La classe `FordConRemolque` **els implementa**, a més d’heretar comportaments de `VehiculoGasolina`.  
* Això permet que qualsevol altre tipus de vehicle que implemente `OpcionRemolque` puga ser utilitzat de la mateixa manera.

---

## 3.3.2.3. Implementació múltiple

Una classe pot implementar **diverses interfícies** simultàniament.  
Això és molt útil per combinar comportaments sense necessitat d’herència múltiple.

```java
interface GPS {
    void mostrarRuta(String desti);
}

interface Musica {
    void reproducirCancion(String titulo);
}

class CocheInteligente implements GPS, Musica {
    public void mostrarRuta(String desti){
        System.out.println("Mostrant la ruta cap a " + desti);
    }

    public void reproducirCancion(String titulo){
        System.out.println("Reproduint: " + titulo);
    }
}
```

Així, `CocheInteligente` pot ser utilitzat com a `GPS` o com a `Musica` segons el context, gràcies al **polimorfisme d’interfícies**.

---

## 3.3.2.4. Interfícies amb constants

Les interfícies també poden definir constants, que són per defecte `public static final`.

```java
interface Configuracio {
    int MAX_VELOCITAT = 120;
}
```

Aquestes constants poden ser utilitzades per qualsevol classe que implemente o faça referència a la interfície:

```java
class Moto implements Configuracio {
    void comprovarLimit(int velocitat){
        if (velocitat > MAX_VELOCITAT)
            System.out.println("Supera el límit legal!");
    }
}
```

---

## 3.3.2.5. Comparació entre interfícies i classes abstractes

| Característica | Interfície | Classe abstracta |
|----------------|-------------|-------------------|
| Instanciable? | ❌ No | ❌ No |
| Conté mètodes amb cos? | ✅ (des de Java 8 amb `default`) | ✅ Sí |
| Conté atributs? | ✅ Només constants (`static final`) | ✅ Variables normals |
| Herència múltiple? | ✅ Sí (una classe pot implementar-ne diverses) | ❌ Només una superclasse |
| Paraula clau | `implements` | `extends` |
| Propòsit principal | Definir un contracte d’ús | Definir comportament parcial o base comuna |

---

## 3.3.2.6. Interfícies amb mètodes `default` i `static` (Java 8+)

A partir de Java 8, les interfícies poden incloure **mètodes amb implementació** mitjançant la paraula clau `default`.

Això permet afegir funcionalitats noves a les interfícies sense trencar el codi existent.

```java
interface Reproductor {
    void play();

    default void stop(){
        System.out.println("Reproductor aturat.");
    }

    static void info(){
        System.out.println("Interfície Reproductor v1.0");
    }
}
```

Una classe que implemente aquesta interfície pot utilitzar el mètode `stop()` directament sense haver de redefinir-lo.

---

## 3.3.2.7. Exemple UML textual

```text
               ┌───────────────────────┐
               │     OpcionRemolque    │
               │───────────────────────│
               │ + engancharRemolque() │
               │ + desengancharRemolque() │
               └───────────┬───────────┘
                           │
                ┌───────────▼───────────┐
                │   FordConRemolque     │
                │───────────────────────│
                │ + engancharRemolque() │
                │ + desengancharRemolque() │
                └─────────────────────────┘
```

---

## 3.3.2.8. Avantatges de l’ús d’interfícies

* **Flexibilitat**: permet combinar funcionalitats sense herència múltiple.  
* **Polimorfisme**: diferents classes poden ser utilitzades indistintament si implementen la mateixa interfície.  
* **Extensibilitat**: es poden afegir nous comportaments sense modificar el codi existent.  
* **Independència**: les interfícies redueixen el grau d’acoblament entre classes.

---

## 3.3.2.9. Resum final

| Concepte | Descripció | Exemple |
|-----------|-------------|----------|
| **Interfície** | Contracte que defineix mètodes sense implementació | `interface OpcionRemolque` |
| **Implementació** | Classe que dóna cos als mètodes de la interfície | `class FordConRemolque implements OpcionRemolque` |
| **Mètodes `default`** | Permeten afegir implementacions opcionals | `default void stop()` |
| **Polimorfisme** | Diverses classes poden compartir el mateix tipus d’interfície | `GPS g = new CocheInteligente();` |

---

> *“Les interfícies són ponts conceptuals que connecten idees distintes sota una mateixa forma d’ús.”*
