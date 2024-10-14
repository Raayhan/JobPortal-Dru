<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;
use Twig\TemplateWrapper;

/* themes/contrib/bootstrap4/templates/navigation/menu--main.html.twig */
class __TwigTemplate_987593eb6fb7abd3446e0cd17a90dc1c extends Template
{
    private Source $source;
    /**
     * @var array<string, Template>
     */
    private array $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->extensions[SandboxExtension::class];
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        // line 21
        $macros["menus"] = $this->macros["menus"] = $this;
        // line 22
        yield "
";
        // line 27
        yield $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(CoreExtension::callMacro($macros["menus"], "macro_build_menu", [($context["items"] ?? null), ($context["attributes"] ?? null), 0], 27, $context, $this->getSourceContext()));
        yield "

";
        // line 43
        yield "
";
        $this->env->getExtension('\Drupal\Core\Template\TwigExtension')
            ->checkDeprecations($context, ["_self", "items", "attributes", "menu_level"]);        yield from [];
    }

    // line 29
    public function macro_build_menu($__items__ = null, $__attributes__ = null, $__menu_level__ = null, ...$__varargs__)
    {
        $macros = $this->macros;
        $context = [
            "items" => $__items__,
            "attributes" => $__attributes__,
            "menu_level" => $__menu_level__,
            "varargs" => $__varargs__,
        ] + $this->env->getGlobals();

        $blocks = [];

        return ('' === $tmp = \Twig\Extension\CoreExtension::captureOutput((function () use (&$context, $macros, $blocks) {
            // line 30
            yield "  ";
            $macros["menus"] = $this;
            // line 31
            yield "  ";
            if (($context["items"] ?? null)) {
                // line 32
                yield "    ";
                if ((($context["menu_level"] ?? null) == 0)) {
                    // line 33
                    yield "    <ul";
                    yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(CoreExtension::getAttribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", ["navbar-nav mr-auto"], "method", false, false, true, 33), 33, $this->source), "html", null, true);
                    yield ">
    ";
                } else {
                    // line 35
                    yield "    <ul class=\"dropdown-menu\">
    ";
                }
                // line 37
                yield "    ";
                $context['_parent'] = $context;
                $context['_seq'] = CoreExtension::ensureTraversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 38
                    yield "      ";
                    yield $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(CoreExtension::callMacro($macros["menus"], "macro_add_link", [$context["item"], ($context["attributes"] ?? null), ($context["menu_level"] ?? null)], 38, $context, $this->getSourceContext()));
                    yield "
    ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_key'], $context['item'], $context['_parent']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 40
                yield "    </ul>
  ";
            }
            yield from [];
        })())) ? '' : new Markup($tmp, $this->env->getCharset());
    }

    // line 44
    public function macro_add_link($__item__ = null, $__attributes__ = null, $__menu_level__ = null, ...$__varargs__)
    {
        $macros = $this->macros;
        $context = [
            "item" => $__item__,
            "attributes" => $__attributes__,
            "menu_level" => $__menu_level__,
            "varargs" => $__varargs__,
        ] + $this->env->getGlobals();

        $blocks = [];

        return ('' === $tmp = \Twig\Extension\CoreExtension::captureOutput((function () use (&$context, $macros, $blocks) {
            // line 45
            yield "  ";
            $macros["menus"] = $this;
            // line 46
            yield "  ";
            // line 47
            $context["list_item_classes"] = ["nav-item", ((CoreExtension::getAttribute($this->env, $this->source,             // line 49
($context["item"] ?? null), "is_expanded", [], "any", false, false, true, 49)) ? ("dropdown") : (""))];
            // line 52
            yield "  ";
            // line 53
            $context["link_classes"] = [(((            // line 54
($context["menu_level"] ?? null) == 0)) ? ("nav-link") : ("dropdown-item")), ((CoreExtension::getAttribute($this->env, $this->source,             // line 55
($context["item"] ?? null), "in_active_trail", [], "any", false, false, true, 55)) ? ("active") : ("")), ((((            // line 56
($context["menu_level"] ?? null) == 0) && (CoreExtension::getAttribute($this->env, $this->source, ($context["item"] ?? null), "is_expanded", [], "any", false, false, true, 56) || CoreExtension::getAttribute($this->env, $this->source, ($context["item"] ?? null), "is_collapsed", [], "any", false, false, true, 56)))) ? ("dropdown-toggle") : (""))];
            // line 59
            yield "  <li";
            yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, ($context["item"] ?? null), "attributes", [], "any", false, false, true, 59), "addClass", [($context["list_item_classes"] ?? null)], "method", false, false, true, 59), 59, $this->source), "html", null, true);
            yield ">
  ";
            // line 60
            $context["link_attrs"] = ["class" => ($context["link_classes"] ?? null)];
            // line 61
            yield "  ";
            if (((($context["menu_level"] ?? null) == 0) && CoreExtension::getAttribute($this->env, $this->source, ($context["item"] ?? null), "below", [], "any", false, false, true, 61))) {
                // line 62
                yield "    ";
                $context["link_attrs"] = Twig\Extension\CoreExtension::merge($this->sandbox->ensureToStringAllowed(($context["link_attrs"] ?? null), 62, $this->source), ["data-toggle" => "dropdown", "title" => ((t("Expand menu") . " ") . $this->sandbox->ensureToStringAllowed(CoreExtension::getAttribute($this->env, $this->source, ($context["item"] ?? null), "title", [], "any", false, false, true, 62), 62, $this->source)), "aria-haspopup" => "true", "aria-expanded" => "false"]);
                // line 63
                yield "  ";
            }
            // line 64
            yield "  ";
            if (CoreExtension::getAttribute($this->env, $this->source, ($context["item"] ?? null), "in_active_trail", [], "any", false, false, true, 64)) {
                // line 65
                yield "    ";
                $context["link_attrs"] = Twig\Extension\CoreExtension::merge($this->sandbox->ensureToStringAllowed(($context["link_attrs"] ?? null), 65, $this->source), ["aria-current" => "page"]);
                // line 66
                yield "  ";
            }
            // line 67
            yield "
  ";
            // line 68
            if (((($context["menu_level"] ?? null) == 0) && CoreExtension::getAttribute($this->env, $this->source, ($context["item"] ?? null), "below", [], "any", false, false, true, 68))) {
                // line 69
                yield "    ";
                yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->getLink($this->sandbox->ensureToStringAllowed(CoreExtension::getAttribute($this->env, $this->source, ($context["item"] ?? null), "title", [], "any", false, false, true, 69), 69, $this->source), $this->sandbox->ensureToStringAllowed(CoreExtension::getAttribute($this->env, $this->source, ($context["item"] ?? null), "url", [], "any", false, false, true, 69), 69, $this->source), $this->sandbox->ensureToStringAllowed(($context["link_attrs"] ?? null), 69, $this->source)), "html", null, true);
                yield "
    ";
                // line 70
                yield $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(CoreExtension::callMacro($macros["menus"], "macro_build_menu", [CoreExtension::getAttribute($this->env, $this->source, ($context["item"] ?? null), "below", [], "any", false, false, true, 70), ($context["attributes"] ?? null), (($context["menu_level"] ?? null) + 1)], 70, $context, $this->getSourceContext()));
                yield "
  ";
            } else {
                // line 72
                yield "    ";
                yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->getLink($this->sandbox->ensureToStringAllowed(CoreExtension::getAttribute($this->env, $this->source, ($context["item"] ?? null), "title", [], "any", false, false, true, 72), 72, $this->source), $this->sandbox->ensureToStringAllowed(CoreExtension::getAttribute($this->env, $this->source, ($context["item"] ?? null), "url", [], "any", false, false, true, 72), 72, $this->source), $this->sandbox->ensureToStringAllowed(($context["link_attrs"] ?? null), 72, $this->source)), "html", null, true);
                yield "
  ";
            }
            // line 74
            yield "  </li>
";
            yield from [];
        })())) ? '' : new Markup($tmp, $this->env->getCharset());
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "themes/contrib/bootstrap4/templates/navigation/menu--main.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable(): bool
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo(): array
    {
        return array (  191 => 74,  185 => 72,  180 => 70,  175 => 69,  173 => 68,  170 => 67,  167 => 66,  164 => 65,  161 => 64,  158 => 63,  155 => 62,  152 => 61,  150 => 60,  145 => 59,  143 => 56,  142 => 55,  141 => 54,  140 => 53,  138 => 52,  136 => 49,  135 => 47,  133 => 46,  130 => 45,  116 => 44,  108 => 40,  99 => 38,  94 => 37,  90 => 35,  84 => 33,  81 => 32,  78 => 31,  75 => 30,  61 => 29,  54 => 43,  49 => 27,  46 => 22,  44 => 21,);
    }

    public function getSourceContext(): Source
    {
        return new Source("", "themes/contrib/bootstrap4/templates/navigation/menu--main.html.twig", "C:\\xampp\\htdocs\\JobPortal\\web\\themes\\contrib\\bootstrap4\\templates\\navigation\\menu--main.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("import" => 21, "macro" => 29, "if" => 31, "for" => 37, "set" => 47);
        static $filters = array("escape" => 33, "merge" => 62, "t" => 62);
        static $functions = array("link" => 69);

        try {
            $this->sandbox->checkSecurity(
                ['import', 'macro', 'if', 'for', 'set'],
                ['escape', 'merge', 't'],
                ['link'],
                $this->source
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
