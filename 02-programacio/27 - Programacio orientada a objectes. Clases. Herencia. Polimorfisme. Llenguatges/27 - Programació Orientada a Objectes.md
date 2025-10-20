# 27 - Programació Orientada a Objectes. Objectes. Classes. Herència, Polimorfisme. Llenguatges

## 1. Introducció

El paradigma de la programació modular divideix el problema en un **conjunt de funcions que operen sobre un grup de dades** per arribar a la solució del problema. Aquest paradigma permet resoldre una gran quantitat de problemes. No obstant això, quan la complexitat d’aquests augmenta, també ho fan les interrelacions, per la qual cosa l’acoblament entre les funcions creix de manera exponencial. Açò acaba generant un codi molt difícil de mantenir, perquè no hi ha una manera senzilla de determinar si un can...

Davant d’aquesta problemàtica, sorgeix el paradigma de la **programació orientada a objectes** (OOP, de l’anglés *Object Oriented Programming*) com a alternativa i complement al de la programació modular. En ell es combinen funcions i dades relacionades en una unitat denominada *objecte*.

En aquest tema s’estudiarà què és la OOP i de quins elements està composta. Així mateix, s’exposaran els pilars més importants de la programació orientada a objectes, entre els quals es troben: **encapsulació, abstracció, herència i polimorfisme**. Finalment, es revisaran quins són els llenguatges de programació orientats a objectes més utilitzats.

Tots els exemples presentats en el tema es realitzaran amb el llenguatge de programació **Java**, ja que és un dels més utilitzats i representatius d’aquest paradigma.

## 2. Classes i Objectes

La idea bàsica d’aquest paradigma és proporcionar models al programador que **s’assemblen al món real** més que els que proporciona la programació modular. D’aquesta manera, la unitat fonamental d’aquest paradigma és l’objecte.

L’objecte està format per un conjunt de variables (denominades *atributs*) i les operacions (denominades *mètodes*) que manipulen aquests atributs. Una classe és el prototip que defineix els atributs i mètodes que formaran part d’un determinat objecte. És la definició abstracta del t...

Per exemple, es defineix la classe *Coche*, amb una sèrie d'atributs que poden formar part d’un cotxe com ara: `km_totales`, `numero_bastidor`, `litros_gasolina`, `en_marcha` i uns mètodes o operacions que pot realitzar com ara: `arranca()`, `para()`, `getNivelGasolina()`, `recorreUnKilómetro()`, `getNumeroBastidor()`. Si es creen diversos objectes d’aquesta classe, existiran variables diferents que podran tindre valors propis per a aquests atributs: cada cotxe tindrà el seu propi número de bastidor, q...

### 2.1. Elements

#### 2.1.1. Atributs

Són les variables o característiques pròpies d’un objecte o classe. Per exemple, els cotxes tenen un número de bastidor que seria un atribut de l’objecte de la classe *Coche*. Els atributs que tenen les classes poden ser de tipus **elemental** (enter, float, booleà, etc.) o **no elemental** (arrays, objectes d’altres classes, etc.).

#### 2.1.2. Mètodes

Són les funcions i procediments propis d’un objecte o classe. Quan s’invoquen des d’altres objectes o des del mateix, s’executa el codi que contenen, amb la qual cosa s’executen accions i es modifica o no l’estat de l’objecte (és a dir, canvien els valors dels seus atributs). El procés d’invocació es realitza amb una sintaxi molt similar a la de la programació modular.

```java
objeto_coche.recorreUnKilometro();
```

La manera d’invocar els mètodes d’un objecte és mitjançant l’enviament de missatges. És a dir, quan s’escriu `objeto_coche.recorreUnKilometro()`, en realitat això es tradueix en: envia el missatge `recorreUnKilometro` sense cap paràmetre a l’objecte `objeto_coche`. Açò permet la **sobrecàrrega de mètodes**, com veurem més avant en el tema.

Es distingeix entre **mètodes i atributs d’objecte** i **de classe**. Un mètode o atribut d’objecte és una variable particular de cada instància de la classe (té un comportament diferent per a cada objecte). En canvi, els mètodes i atributs de classe són propis de la classe i serveixen per a valors globals, com ara el nombre total d’objectes creats.

#### 2.1.3. Constructors i Destructors

Els constructors i destructors són mètodes especials que serveixen per crear i eliminar objectes d’una classe. És a dir, permeten reservar memòria, inicialitzar atributs i mètodes o alliberar l’espai que ocupaven. Alguns llenguatges com **Java** no necessiten mètodes destructors perquè tenen un sistema denominat **recollidor de fem** (*garbage collector*) que s’encarrega d’alliberar la memòria dels objectes que ja no s’utilitzen. Altres llenguatges com *C++* requereixen que el programador indique explícit...

```java
public class Coche {
    // Atributos
    String num_bastidor;
    float km_totales;
    float litros_gasolina;
    boolean en_marcha;

    Coche(String bastidor){
        num_bastidor = bastidor;
        km_totales = 0;
        litros_gasolina = 0;
        en_marcha = false;
    } 

    // Métodos
    void arranca(){
        en_marcha = true;
    }

    String getNumeroDeBastidor(){
        return num_bastidor;
    }

    // Más métodos...
}
```

En el cas de Java o C# sí que existeixen mètodes específics per al recollidor de fem, però no sabem quan s’executaran ni si realment s’executaran, per la qual cosa no s’ha de confiar en ells com a desencadenants d’accions.

### 2.2. Associacions

Les **agregacions** i **composicions** són tipus especials d’associacions entre classes on una de les dues classes representa un “tot” i l’altra una part d’aquest tot. La diferència entre les dues és subtil:

* **Agregació:** una classe és el tot i l’altra és una part, però la part pot existir per si mateixa si el tot desapareix. Exemple: una *Biblioteca* i *Libro*.
* **Composició:** si el tot desapareix, la part també desapareix. Exemple: una *Casa* i les seues *Ventanas*.

Depenent del llenguatge utilitzat, és possible que només permeta representar un dels dos subtipus d’associacions.

```java
class Coche {
    Persona conductor;
    Persona[] pasajeros;
}

class Persona {
    String DNI;
    String nombre;
}
```

## 3. Els 4 Pilars de la Programació Orientada a Objectes

L’objectiu de la programació orientada a objectes és reduir la complexitat de les solucions i proporcionar eines als programadors per utilitzar estructures i conceptes més propers al món real. La unitat bàsica és l’objecte i el paradigma es fonamenta en els següents pilars: **encapsulació, abstracció, herència i polimorfisme.**

### 3.1. Encapsulació

L’encapsulació fa referència a la capacitat de **combinar dades (atributs) i mòduls que operen sobre aquestes dades (funcions) en una mateixa unitat funcional (objecte)**. Alhora, juntament amb l’abstracció, proporciona els mecanismes necessaris per ocultar els atributs de manera que no siguen accessibles per altres objectes i que el seu accés només es puga realitzar a través de mètodes. Els mètodes utilitzats per accedir als atributs es coneixen habitualment com *getters* i *setters*.

### 3.2. Abstracció

L’abstracció respon a la necessitat de reduir la quantitat d’informació amb què treballa el programador, amagant els detalls no rellevants.

En l’exemple de la classe *Coche*, el mètode `arranca()` podria cridar altres com `abreElFiltroDelAire()`, `calientaElMotor()`, `abrePasoDeGasolina()`, etc. Si un programador està implementant el sistema de remolc, només necessita accedir al mètode `arranca()`, ja que no li cal conéixer la seqüència interna d’arrencada. Açò és comparable al que fa un conductor: quan gira la clau d’un cotxe, no necessita tindre un ampli coneixement de mecànica per a que el cotxe arranque. En aquest cas, la funció `arranca()` li abstrau la complexitat del motor.

Com a complement de l’encapsulació, que proporciona la funcionalitat per combinar mètodes amb atributs dins d’un mateix objecte, l’abstracció aporta les eines per restringir l’accés a determinats mètodes i atributs. Aquesta restricció d’accés es realitza mitjançant **modificadors d’accés**, que cada llenguatge de programació implementa d’una manera pròpia, tot i que molt semblant.

Els àmbits d’accés que poden trobar-se en una aplicació Java són els següents:

* **Classe:** fa referència al tipus de dada en si mateix.  
* **Paquet:** és una estructura que s’utilitza per agrupar classes relacionades en Java (similar als directoris o *namespaces* de C).  
* **Subclasse:** és un nou tipus de dada que estèn una definició existent (es veurà més en profunditat en el punt d’herència).  
* **Món:** tota l’aplicació on s’incloga la classe.

|                     | Classe | Paquet | Subclasse | Món  |
| ------------------- | :----: | :----: | :-------: | :--: |
| ```public```        |   X    |   X    |     X     |  X   |
| ```protected```     |   X    |   X    |     X     |  O   |
| *sense modificador* |   X    |   X    |     O     |  O   |
| ```private```       |   X    |   O    |     O     |  O   |

**Exemple en Java:**

```java
class Coche {
    private boolean en_marcha;

    private void abreElFiltroDelAire(){
        // ...
    }
    
    private void calientaElMotor(){
        // ...
    }
    
    public boolean arranca(){
        abreElFiltroDelAire();
        calientaElMotor();
        en_marcha = true;
        return en_marcha;
    }
}
```

### 3.3. Herència

L’herència és una relació entre classes que pot definir-se com “és un”. Per exemple, una classe *Vehículo* pot contindre atributs comuns, i les classes *Coche* o *Camión* poden heretar-ne aquests atributs i afegir-ne de nous. Amb aquesta tècnica, s’evita la duplicació de codi i s’aconsegueix reutilització.

```java
public class Vehiculo {
    protected int km_totales;
    private String num_bastidor;
    // ... més atributs i mètodes
}

// La classe Coche hereta de Vehículo
public class Coche extends Vehiculo {
    int num_pasajeros;
}

public class Camion extends Vehiculo {
    void soltarCaja(){
        // Accions del mètode
    }
}
```

L’herència és un mecanisme que permet reutilitzar codi i propietats d’una classe en una altra, que normalment n’afegeix algunes pròpies (nous atributs o mètodes) o redefineix algun dels de la classe pare. La jerarquia resultant forma una estructura en arbre.

Tipus principals d’herència:

1. **Simple:** una classe només pot heretar d’una altra (com en Java o C#).
2. **Múltiple:** una classe pot heretar de diverses i triar què heretar de cadascuna (com en C++).

#### 3.3.1. Classes Abstractes

Les classes abstractes permeten definir mètodes que les subclasses han d’implementar obligatòriament. S’utilitzen quan es vol assegurar que totes les subclasses tinguen un mètode concret, però sense definir-ne la implementació a la classe pare.

```java
public abstract class Vehiculo {
    public abstract void arranca();
}

public class VehiculoElectrico extends Vehiculo {
    public void arranca(){
        // Implementació de la seqüència d’arrencada
    }
}

public class VehiculoGasolina extends Vehiculo {
    public void arranca(){
        // Implementació de la seqüència d’arrencada
    }
}
```

#### 3.3.2. Interfícies

Les interfícies són semblants a les classes abstractes, però tots els seus mètodes són abstractes. Una classe pot implementar diverses interfícies, encara que només pot heretar d’una altra classe. D’aquesta manera, es pot aconseguir una funcionalitat semblant a l’herència múltiple.

```java
interface OpcionRemolque {
    void engancharRemolque();
    void desengancharRemolque();
}

public class FordConRemolque extends VehiculoGasolina implements OpcionRemolque {
    public void engancharRemolque(){
        // Implementació pròpia
    }
    public void desengancharRemolque(){
        // Implementació pròpia
    }
}
```

### 3.4. Polimorfisme

El polimorfisme és la capacitat d’adoptar diverses formes. Aplicat a la programació orientada a objectes, es manifesta de tres maneres:

#### 3.4.1. Sobrecàrrega o polimorfisme ad-hoc

Permet definir diversos mètodes amb el mateix nom però diferents paràmetres.  
Exemple:

```java
public class Saludo {
    public void saludar(){
        System.out.println("Hola");
    }
    public void saludar(String nombre){
        System.out.println("Hola " + nombre);
    }
}
```

#### 3.4.2. Sobreescriptura o polimorfisme d’inclusió

Succeeix quan una subclasse redefineix un mètode de la superclasse amb un comportament diferent.  
Exemple:

```java
public class VehiculoGasolina {
    public void arranca(){
        System.out.println("Arrancant amb gasolina...");
    }
}

public class Motocicleta extends VehiculoGasolina {
    @Override
    public void arranca(){
        System.out.println("La moto arranca amb acceleració suau.");
    }
}
```

#### 3.4.3. Variables polimòrfiques

Són variables que poden comportar-se com una classe base o com qualsevol de les seues subclasses.

```java
Vehiculo v1 = new VehiculoGasolina();
Vehiculo v2 = new Motocicleta();
v1.arranca();
v2.arranca();
```

## 4. Llenguatges

A continuació es presenten els llenguatges orientats a objectes més representatius utilitzats actualment, segons estudis especialitzats com els publicats per la revista **RedMonk**, que analitza l’ús dels llenguatges a plataformes com *GitHub* i *Stack Overflow*.

### 4.1. Javascript (Híbrid)

Continua sent el llenguatge de desenvolupament web del costat del client per excel·lència, però amb l’aparició de **Node.js** també s’ha estès al costat del servidor. Això li permet connectar-se a bases de dades i servir contingut web, la qual cosa el converteix en un llenguatge molt versàtil.

### 4.2. Java (Pur)

És el llenguatge per al desenvolupament d’aplicacions més utilitzat. La seua versatilitat, naturalesa multiplataforma i estabilitat l’han fet idoni per al desenvolupament d’aplicacions de servidor, d’escriptori i d’Android.  
Per al desenvolupament en entorn servidor destaca el *framework* **Spring**.

### 4.3. Python (Híbrid)

L’auge del llenguatge **Python** en els darrers anys es deu principalment a la seua facilitat d’aprenentatge i ús. És un llenguatge d’alt nivell amb una sintaxi molt senzilla i llegible, fet que el converteix en un candidat ideal per a l’ensenyament de la programació en etapes educatives intermitges (com batxillerat o primers cursos universitaris).  
La seua gran versatilitat permet adaptar-lo a diferents paradigmes: imperatiu, orientat a objectes, funcional, i fins i tot per al desenvolupament de scripts de sistema o videojocs.

### 4.4. PHP (Híbrid)

Tot i que **Javascript** és el llenguatge més conegut en l’àmbit web, la gran majoria d’aplicacions de servidor encara es desenvolupen en **PHP**, utilitzant *frameworks* com **Laravel** o **Symfony**.  
És un llenguatge flexible, de fàcil aprenentatge i que pot emprar-se tant de forma imperativa com orientada a objectes.

### 4.5. C# (Pur)

El llenguatge **C#**, desenvolupat per **Microsoft**, és el principal de la plataforma .NET i permet crear aplicacions de tota mena: des d’aplicacions de consola o d’escriptori (amb **Windows Forms** o **WPF**) fins a aplicacions web amb **ASP.NET**, o aplicacions mòbils gràcies a **Xamarin**.  
El seu principal inconvenient, en comparació amb altres llenguatges com **Java**, és la seua dependència dels sistemes **Windows**, fet que en dificulta l’adopció en altres entorns com macOS o Linux. A més, hi ha pocs proveïdors d’allotjament web que donen suport a aplicacions **ASP.NET**, cosa que limita el seu ús respecte a alternatives com **PHP** o **Java**.

Els **principis SOLID**, proposats per *Robert C. Martin* (*Uncle Bob*), representen cinc directrius fonamentals del disseny orientat a objectes. La seua aplicació permet desenvolupar programes més **modulars, mantenibles i fàcilment extensibles**.

| Lletra | Nom complet                             | Traducció                            | Descripció breu                                              |
| :----: | :-------------------------------------- | :----------------------------------- | :----------------------------------------------------------- |
| **S**  | *Single Responsibility Principle (SRP)* | Principi de responsabilitat única    | Una classe ha de tindre **una sola raó per a canviar**. Cada mòdul o classe ha de complir una única funció dins del sistema. |
| **O**  | *Open/Closed Principle (OCP)*           | Principi d’obertura/tancament        | El codi ha d’estar **obert a l’extensió però tancat a la modificació**. És a dir, s’ha de poder ampliar sense haver de modificar el codi existent. |
| **L**  | *Liskov Substitution Principle (LSP)*   | Principi de substitució de Liskov    | Una subclasse ha de poder substituir la seua classe pare **sense alterar el comportament correcte del programa**. |
| **I**  | *Interface Segregation Principle (ISP)* | Principi de segregació d’interfícies | És millor tindre **moltes interfícies específiques** que una de massa gran. Els clients no haurien de dependre de mètodes que no utilitzen. |
| **D**  | *Dependency Inversion Principle (DIP)*  | Principi d’inversió de dependències  | Les classes d’alt nivell **no han de dependre de classes de baix nivell**, sinó d’abstraccions (*interfícies*). Les dependències han d’anar de fora cap a dins. |

### Exemple visual

Una de les representacions més populars d’aquests principis és la del **Principi de Substitució de Liskov (LSP)**, que recorda que tota subclasse ha de comportar-se com la seua superclasse sense alterar la lògica general del sistema.

![liskov_principle](md_media/liskov_meme.jpg)

Aplicar aquests principis no sols millora la qualitat del codi, sinó que també redueix el cost de manteniment i facilita la col·laboració en projectes grans.

> 💡 *“El bon disseny no és aquell que no canvia mai, sinó aquell que pot canviar fàcilment.”* — *Robert C. Martin (Uncle Bob)*

## 6. Conclusió

La **programació orientada a objectes (OOP)** ha suposat un canvi fonamental en la manera de concebre i desenvolupar programari. En contrast amb els paradigmes estructurats o modulars, la OOP ofereix un model que reflecteix millor el món real, ja que organitza les dades i els comportaments en unitats anomenades objectes.

Aquest enfocament facilita la reutilització del codi, la modularitat i la mantenibilitat dels programes, alhora que fomenta la col·laboració en equips de desenvolupament mitjançant estructures clares i jeràrquiques. Els conceptes d’encapsulació, abstracció, herència i polimorfisme constitueixen la base sobre la qual s’edifiquen la major part dels llenguatges moderns de programació.

Tanmateix, cal recordar que la programació orientada a objectes no és una solució universal. La seua eficàcia depén de l’aplicació correcta dels seus principis i patrons de disseny, com els principis SOLID, que ajuden a mantindre l’ordre, la coherència i la flexibilitat del codi al llarg del temps.

En definitiva, la OOP no sols és una tècnica de programació, sinó una filosofia de disseny que busca millorar la comprensió, l’evolució i la qualitat del programari.

## 7. Bibliografia

1. [RedMonk – *Language Rankings*](https://redmonk.com/sogrady/2019/03/20/language-rankings-1-19/)  
   Informe anual d’anàlisi de popularitat dels llenguatges de programació basat en dades de *GitHub* i *Stack Overflow*.

2. [Mosh Hamedani – *4 Pillars of Object-Oriented Programming*](http://codewithmosh.com)  
   Guia pràctica sobre els fonaments de la programació orientada a objectes, amb exemples clars i aplicacions modernes.

3. *Codi net: Manual d’estil per al desenvolupament àgil de programari* – Robert C. Martin (Anaya Multimedia, 2009).  
   Referència fonamental per entendre els principis SOLID i l’aplicació de bones pràctiques en el desenvolupament orientat a objectes.

4. *Fonaments de Programació. Algorismes, estructures de dades i objectes* – Lluís Joyanes Aguilar (McGraw-Hill, 2006).  
   Text universitari que combina la teoria de la programació amb exemples pràctics en llenguatges orientats a objectes.

5. *Java 8 in Action: Lambdas, Streams and Functional-Style Programming* – Diversos autors (Ed. Manning, 2014).  
   Obra clau per comprendre la integració de paradigmes funcionals dins del model orientat a objectes de Java.

6. *Especificació de Java 1.9* – Oracle Corporation.  
   Document tècnic oficial que descriu les noves característiques i millores introduïdes a partir de la versió 1.9 del llenguatge Java.